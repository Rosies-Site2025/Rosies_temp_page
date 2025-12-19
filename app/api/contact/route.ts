// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, service, message, website } = await request.json();

    // Honeypot check - if 'website' field is filled, it's a bot
    if (website) {
      console.log('Spam bot detected via honeypot');
      // Return success to trick the bot, but don't send email
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'contact@rosiesjanitorialoc.com',
      to: 'fatimaespinoza4@gmail.com',
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Quote Request</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
            
            <!-- Main Container -->
            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
              <tr>
                <td style="padding: 40px 20px;" align="center">
                  
                  <!-- Email Card -->
                  <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                    
                    <!-- Header with Brand Color -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); padding: 40px 30px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                          ✨ New Quote Request
                        </h1>
                        <p style="margin: 10px 0 0 0; color: #e0f2fe; font-size: 14px;">
                          Rosie's Janitorial Services
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        
                        <!-- Customer Info Section -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                          <tr>
                            <td style="padding: 0 0 20px 0;">
                              <h2 style="margin: 0 0 20px 0; color: #0e7490; font-size: 20px; font-weight: 600; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
                                Customer Information
                              </h2>
                            </td>
                          </tr>
                          
                          <!-- Name -->
                          <tr>
                            <td style="padding: 12px 20px; background-color: #f0fdfa; border-left: 4px solid #06b6d4; border-radius: 6px; margin-bottom: 10px;">
                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="width: 120px; font-weight: 600; color: #0e7490; font-size: 14px; vertical-align: top;">
                                    👤 Name:
                                  </td>
                                  <td style="color: #164e63; font-size: 16px; font-weight: 500;">
                                    ${name}
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <tr><td style="height: 10px;"></td></tr>
                          
                          <!-- Email -->
                          <tr>
                            <td style="padding: 12px 20px; background-color: #f0fdfa; border-left: 4px solid #06b6d4; border-radius: 6px;">
                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="width: 120px; font-weight: 600; color: #0e7490; font-size: 14px; vertical-align: top;">
                                    📧 Email:
                                  </td>
                                  <td style="color: #164e63; font-size: 16px;">
                                    <a href="mailto:${email}" style="color: #0891b2; text-decoration: none; font-weight: 500;">
                                      ${email}
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <tr><td style="height: 10px;"></td></tr>
                          
                          <!-- Phone -->
                          <tr>
                            <td style="padding: 12px 20px; background-color: #f0fdfa; border-left: 4px solid #06b6d4; border-radius: 6px;">
                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="width: 120px; font-weight: 600; color: #0e7490; font-size: 14px; vertical-align: top;">
                                    📱 Phone:
                                  </td>
                                  <td style="color: #164e63; font-size: 16px; font-weight: 500;">
                                    <a href="tel:${phone}" style="color: #0891b2; text-decoration: none;">
                                      ${phone}
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          ${company ? `
                          <tr><td style="height: 10px;"></td></tr>
                          
                          <!-- Company -->
                          <tr>
                            <td style="padding: 12px 20px; background-color: #f0fdfa; border-left: 4px solid #06b6d4; border-radius: 6px;">
                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="width: 120px; font-weight: 600; color: #0e7490; font-size: 14px; vertical-align: top;">
                                    🏢 Company:
                                  </td>
                                  <td style="color: #164e63; font-size: 16px; font-weight: 500;">
                                    ${company}
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          ` : ''}
                          
                          ${service ? `
                          <tr><td style="height: 10px;"></td></tr>
                          
                          <!-- Service -->
                          <tr>
                            <td style="padding: 12px 20px; background-color: #ecfeff; border-left: 4px solid #06b6d4; border-radius: 6px;">
                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="width: 120px; font-weight: 600; color: #0e7490; font-size: 14px; vertical-align: top;">
                                    🧹 Service:
                                  </td>
                                  <td style="color: #164e63; font-size: 16px; font-weight: 600;">
                                    ${service.charAt(0).toUpperCase() + service.slice(1)} Cleaning
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          ` : ''}
                        </table>
                        
                        <!-- Message Section -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 0 0 20px 0;">
                              <h2 style="margin: 0 0 20px 0; color: #0e7490; font-size: 20px; font-weight: 600; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
                                Message
                              </h2>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 20px; background-color: #f0fdfa; border-radius: 8px; border-left: 4px solid #06b6d4;">
                              <p style="margin: 0; color: #164e63; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${message}
                              </p>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Action Button -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 30px;">
                          <tr>
                            <td align="center" style="padding: 20px 0;">
                              <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(8, 145, 178, 0.3);">
                                📧 Reply to Customer
                              </a>
                            </td>
                          </tr>
                        </table>
                        
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f0f9ff; padding: 30px; text-align: center; border-top: 1px solid #e0f2fe;">
                        <p style="margin: 0 0 10px 0; color: #0e7490; font-size: 14px; font-weight: 600;">
                          Rosie's Janitorial Services
                        </p>
                        <p style="margin: 0 0 5px 0; color: #0891b2; font-size: 13px;">
                          Women-Owned • Orange County, CA
                        </p>
                        <p style="margin: 10px 0 0 0; color: #67e8f9; font-size: 12px;">
                          This email was sent from the contact form at rosiesjanitorialoc.com
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                  
                </td>
              </tr>
            </table>
            
          </body>
        </html>
      `
    });

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}