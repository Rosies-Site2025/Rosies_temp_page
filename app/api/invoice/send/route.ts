import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const invoice = await request.json();

    const isFramchisee = invoice.invoice_type === 'franchisee';

    // Build line items HTML
    let itemsHtml = '';
    if (isFramchisee && invoice.items) {
      itemsHtml = invoice.items.map((item: any) => `
        <tr>
          <td style="padding: 15px 12px; border-bottom: 1px solid #e0e0e0; color: #171717;">
            <div style="font-weight: 600;">${item.account_name}</div>
            ${item.description ? `<div style="font-size: 13px; color: #666; margin-top: 4px;">${item.description}</div>` : ''}
            ${item.notes ? `<div style="font-size: 11px; color: #999; margin-top: 4px; font-style: italic;">Note: ${item.notes}</div>` : ''}
          </td>
          <td style="padding: 15px 12px; border-bottom: 1px solid #e0e0e0; text-align: right; color: #171717;">$${Number(item.amount).toLocaleString()}</td>
        </tr>
      `).join('');
    } else {
      itemsHtml = `
        <tr>
          <td style="padding: 15px 12px; border-bottom: 1px solid #e0e0e0; color: #171717;">${invoice.service_description}</td>
          <td style="padding: 15px 12px; border-bottom: 1px solid #e0e0e0; text-align: right; color: #171717;">$${Number(invoice.amount).toLocaleString()}</td>
        </tr>
      `;
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'invoices@rosiesjanitorialoc.com',
      to: invoice.client_email,
      subject: `Invoice ${invoice.invoice_number} from Rosie's Janitorial Services`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #f5f5f5;">
          <div style="background: white; padding: 40px; border: 1px solid #e0e0e0;">
            <div style="border-bottom: 2px solid #171717; padding-bottom: 20px; margin-bottom: 30px;">
              <h1 style="margin: 0; font-size: 24px; color: #171717;">Rosie's Janitorial Services</h1>
              <p style="margin: 5px 0 0; color: #666;">Orange County, CA</p>
            </div>
            
            <div style="text-align: right; margin-bottom: 30px;">
              <span style="font-size: 32px; color: #999; font-weight: bold;">INVOICE</span>
            </div>

            <table style="width: 100%; margin-bottom: 30px;">
              <tr>
                <td style="vertical-align: top;">
                  <p style="margin: 0 0 5px; color: #666; font-size: 12px; text-transform: uppercase;">Bill To</p>
                  <p style="margin: 0; font-weight: bold; color: #171717;">${invoice.client_name}</p>
                  <p style="margin: 5px 0; color: #444;">${invoice.client_address || ''}</p>
                  <p style="margin: 0; color: #444;">${invoice.client_email}</p>
                </td>
                <td style="vertical-align: top; text-align: right;">
                  <p style="margin: 0 0 5px; color: #666; font-size: 12px; text-transform: uppercase;">Invoice Number</p>
                  <p style="margin: 0 0 15px; color: #171717; font-weight: bold;">${invoice.invoice_number}</p>
                  <p style="margin: 0 0 5px; color: #666; font-size: 12px; text-transform: uppercase;">Invoice Date</p>
                  <p style="margin: 0 0 15px; color: #171717;">${new Date(invoice.created_at).toLocaleDateString()}</p>
                  ${!isFramchisee && invoice.due_date ? `
                    <p style="margin: 0 0 5px; color: #666; font-size: 12px; text-transform: uppercase;">Due Date</p>
                    <p style="margin: 0; color: #171717; font-weight: bold;">${new Date(invoice.due_date).toLocaleDateString()}</p>
                  ` : ''}
                  ${isFramchisee ? `
                    <p style="margin: 0 0 5px; color: #666; font-size: 12px; text-transform: uppercase;">Terms</p>
                    <p style="margin: 0; color: #171717;">Due on Receipt</p>
                  ` : ''}
                </td>
              </tr>
            </table>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <thead>
                <tr style="background: #f5f5f5;">
                  <th style="text-align: left; padding: 12px; font-size: 12px; text-transform: uppercase; color: #666; border-bottom: 1px solid #e0e0e0;">${isFramchisee ? 'Item & Description' : 'Description'}</th>
                  <th style="text-align: right; padding: 12px; font-size: 12px; text-transform: uppercase; color: #666; border-bottom: 1px solid #e0e0e0;">Amount</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>

            <div style="text-align: right; margin-bottom: 40px;">
              <p style="font-size: 24px; font-weight: bold; color: #171717; margin: 0;">${isFramchisee ? 'Balance Due' : 'Total'}: $${Number(invoice.amount).toLocaleString()}</p>
            </div>

            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
              <p style="margin: 0 0 5px;"><strong>Rosie's Janitorial Services</strong></p>
              <p style="margin: 0 0 5px;">(949) 687-8297 | rosiesjanitorial@yahoo.com</p>
              <p style="margin: 0;">Serving Orange County, California</p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
            <p style="margin: 0;">${isFramchisee ? 'Thank you for your business.' : 'Please remit payment within 30 days. Thank you for your business!'}</p>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error: any) {
    console.error('Invoice send error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send invoice' },
      { status: 500 }
    );
  }
}
