import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// メール送信機能
async function sendEmail(contactData: any) {
  // SMTPトランスポーターの設定
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // 587ポートの場合はfalse
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // 管理者向けメールの内容
  const adminMailOptions = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `【お問い合わせ】${contactData.name}様からのご連絡`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          新しいお問い合わせ
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">お客様情報</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">お名前:</td>
              <td style="padding: 8px 0;">${contactData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">メールアドレス:</td>
              <td style="padding: 8px 0;">${contactData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">会社名:</td>
              <td style="padding: 8px 0;">${contactData.company || '（未入力）'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">ご希望サービス:</td>
              <td style="padding: 8px 0;">${contactData.service || '（未選択）'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">送信日時:</td>
              <td style="padding: 8px 0;">${new Date(contactData.timestamp).toLocaleString('ja-JP')}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="color: #1e40af; margin-top: 0;">お問い合わせ内容</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${contactData.message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
          <p style="margin: 0; color: #92400e;">
            <strong>📧 お客様への返信をお忘れなく！</strong><br>
            メールアドレス: <a href="mailto:${contactData.email}" style="color: #1d4ed8;">${contactData.email}</a>
          </p>
        </div>
      </div>
    `,
  }

  // 自動返信メールの内容
  const autoReplyMailOptions = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: contactData.email,
    subject: 'お問い合わせありがとうございます - Ex-Port.net',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          お問い合わせありがとうございます
        </h2>
        
        <p>
          ${contactData.name} 様
        </p>
        
        <p>
          この度は、Ex-Port.netにお問い合わせいただき、誠にありがとうございます。<br>
          以下の内容でお問い合わせを受け付けいたしました。
        </p>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">受付内容</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">お名前:</td>
              <td style="padding: 8px 0;">${contactData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">会社名:</td>
              <td style="padding: 8px 0;">${contactData.company || '（未入力）'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">ご希望サービス:</td>
              <td style="padding: 8px 0;">${contactData.service || '（未選択）'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">受付日時:</td>
              <td style="padding: 8px 0;">${new Date(contactData.timestamp).toLocaleString('ja-JP')}</td>
            </tr>
          </table>
          
          <div style="margin-top: 15px;">
            <strong style="color: #1e40af;">お問い合わせ内容:</strong>
            <div style="background-color: #fff; padding: 15px; margin-top: 8px; border-radius: 4px; border: 1px solid #e2e8f0;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${contactData.message}</p>
            </div>
          </div>
        </div>
        
        <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">🚀 今後の流れ</h3>
          <ol style="margin: 0; padding-left: 20px; line-height: 1.8;">
            <li>内容を確認させていただきます（通常1営業日以内）</li>
            <li>担当者より詳細なヒアリングのご連絡をいたします</li>
            <li>ご要望に応じてお見積もりをご提案します</li>
            <li>プロジェクト開始</li>
          </ol>
        </div>
        
        <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
          <h3 style="color: #1e40af;">📞 お急ぎの場合</h3>
          <p>
            お急ぎの場合は、以下までお電話ください：<br>
            <strong style="color: #059669;">080-6939-4131</strong><br>
            <small style="color: #6b7280;">営業時間: 平日 9:00-17:00</small>
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            Ex-Port.net<br>
            〒381-0034 長野県長野市高田五分一420<br>
            Email: info@ex-port.net | Tel: 080-6939-4131
          </p>
        </div>
      </div>
    `,
  }

  // メール送信
  await transporter.sendMail(adminMailOptions)
  await transporter.sendMail(autoReplyMailOptions)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // メールアドレスの簡単なバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      )
    }

    // お問い合わせデータの作成
    const contactData = {
      id: Date.now().toString(),
      name,
      email,
      company: company || '',
      service: service || '',
      message,
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    try {
      // メール送信
      await sendEmail(contactData)
      console.log('Contact form submission and email sent:', contactData)
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // メール送信に失敗してもフォーム送信は成功として扱う（ログに記録）
    }

    // レスポンス
    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました。ありがとうございます。確認メールをお送りしましたので、ご確認ください。',
      data: contactData
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。' },
      { status: 500 }
    )
  }
}

// CORS対応（必要に応じて）
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}