import { NextResponse } from 'next/server';
import { adminTemplate, userTemplate } from '@/app/lib/emailTemplates';

const sampleData = {
  name: "Mario Rossi",
  email: "mario.rossi@example.com",
  phone: "+39 123 456 7890",
  amount: "15.000",
  profession: "Dipendente"
};

export async function GET(req: Request) {
  const searchParams = new URL(req.url).searchParams;
  const template = searchParams.get('template') || 'both';

  let html = '';

  if (template === 'admin' || template === 'both') {
    html += `
      <div class="preview-section">
        <div class="preview-header">
          <h2>Admin Template</h2>
          <a href="/api/email-preview?template=admin" class="preview-link">View Full Screen</a>
        </div>
        <div class="preview-frame">
          ${adminTemplate(sampleData)}
        </div>
      </div>
    `;
  }

  if (template === 'user' || template === 'both') {
    html += `
      <div class="preview-section">
        <div class="preview-header">
          <h2>User Template</h2>
          <a href="/api/email-preview?template=user" class="preview-link">View Full Screen</a>
        </div>
        <div class="preview-frame">
          ${userTemplate(sampleData)}
        </div>
      </div>
    `;
  }

  const fullHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template Preview</title>
        <style>
          :root {
            color-scheme: light;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            padding: 0;
            margin: 0;
            background: #f8fafc;
            color: #1a1a1a;
            min-height: 100vh;
          }
          .page-header {
            background: #ffffff;
            padding: 24px;
            border-bottom: 1px solid #e2e8f0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          }
          .header-content {
            max-width: 1200px;
            margin: 0 auto;
          }
          .page-title {
            font-size: 24px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 16px;
          }
          .nav-links {
            display: flex;
            gap: 12px;
          }
          .nav-link {
            padding: 8px 16px;
            background: #2196f3;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s ease;
          }
          .nav-link:hover {
            background: #1976d2;
          }
          .nav-link.active {
            background: #1976d2;
          }
          main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 32px 24px;
          }
          .preview-section {
            background: white;
            border-radius: 16px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            overflow: hidden;
            margin-bottom: 32px;
          }
          .preview-section:last-child {
            margin-bottom: 0;
          }
          .preview-header {
            padding: 16px 24px;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #f8fafc;
          }
          .preview-header h2 {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0;
          }
          .preview-link {
            padding: 6px 12px;
            background: #2196f3;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 500;
            transition: all 0.2s ease;
          }
          .preview-link:hover {
            background: #1976d2;
          }
          .preview-frame {
            padding: 32px;
            background: #f0f4f8;
            min-height: 400px;
            overflow: auto;
          }
          @media (max-width: 768px) {
            .page-header {
              padding: 16px;
            }
            main {
              padding: 16px;
            }
            .preview-frame {
              padding: 16px;
            }
          }
        </style>
      </head>
      <body>
        <header class="page-header">
          <div class="header-content">
            <h1 class="page-title">Email Template Preview</h1>
            <nav class="nav-links">
              <a href="/api/email-preview?template=both" class="nav-link ${template === 'both' ? 'active' : ''}">
                Both Templates
              </a>
              <a href="/api/email-preview?template=admin" class="nav-link ${template === 'admin' ? 'active' : ''}">
                Admin Template
              </a>
              <a href="/api/email-preview?template=user" class="nav-link ${template === 'user' ? 'active' : ''}">
                User Template
              </a>
            </nav>
          </div>
        </header>
        <main>
          ${html}
        </main>
      </body>
    </html>
  `;

  return new NextResponse(fullHtml, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
} 