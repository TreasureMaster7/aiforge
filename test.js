// AI Forge - Playwright test
const { chromium } = require('playwright');
const path = require('path');

async function test() {
  console.log('Starting AI Forge test...');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  // Track errors
  const errors = [];
  page.on('pageerror', err => errors.push(`PAGE ERROR: ${err.message}`));
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(`CONSOLE ERROR: ${msg.text()}`);
    }
  });

  const baseUrl = `file://${path.resolve(__dirname)}`;

  // Test 1: Homepage
  console.log('\n--- Test 1: Homepage ---');
  await page.goto(`${baseUrl}/index.html`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  const title = await page.title();
  console.log('Title:', title);

  // Check key elements
  const heroHeadline = await page.textContent('.hero-headline');
  console.log('Hero headline:', heroHeadline);

  // Check trending tools loaded
  const trendingCount = await page.locator('#trending-grid .tool-card').count();
  console.log('Trending tools count:', trendingCount);

  // Check categories loaded
  const categoryCount = await page.locator('#categories-grid .category-card').count();
  console.log('Categories count:', categoryCount);

  // Take screenshot
  await page.screenshot({ path: 'screenshot-home.png', fullPage: false });
  console.log('Homepage screenshot saved');

  // Test 2: Tools page
  console.log('\n--- Test 2: Tools Page ---');
  await page.goto(`${baseUrl}/tools.html`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  const allToolsCount = await page.locator('#all-tools-grid .tool-card').count();
  console.log('All tools count:', allToolsCount);

  // Test category filter
  await page.click('[data-filter-category="code"]');
  await page.waitForTimeout(500);
  const codeToolsCount = await page.locator('#all-tools-grid .tool-card').count();
  console.log('Code tools count:', codeToolsCount);

  // Test search
  await page.click('[data-filter-category="all"]');
  await page.waitForTimeout(300);
  await page.fill('#tools-search', 'claude');
  await page.waitForTimeout(500);
  const searchResults = await page.locator('#all-tools-grid .tool-card').count();
  console.log('Search "claude" results:', searchResults);

  // Clear search
  await page.fill('#tools-search', '');
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'screenshot-tools.png', fullPage: false });

  // Test 3: Blog page
  console.log('\n--- Test 3: Blog Page ---');
  await page.goto(`${baseUrl}/blog.html`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);

  const blogCount = await page.locator('.blog-card').count();
  console.log('Blog cards count:', blogCount);

  await page.screenshot({ path: 'screenshot-blog.png', fullPage: false });

  // Test 4: Submit page
  console.log('\n--- Test 4: Submit Page ---');
  await page.goto(`${baseUrl}/submit.html`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);

  // Fill form
  await page.fill('input[name="toolName"]', 'Test AI Tool');
  await page.fill('input[name="tagline"]', 'A test tool for our parser');
  await page.fill('textarea[name="description"]', 'This is a test submission for our custom parser. It should extract capabilities and match user queries.');
  await page.selectOption('select[name="category"]', 'writing');
  await page.selectOption('select[name="pricing"]', 'freemium');
  await page.fill('input[name="website"]', 'https://example.com');
  await page.fill('input[name="submitterName"]', 'John Doe');
  await page.fill('input[name="email"]', 'john@example.com');
  await page.check('input[type="checkbox"]');

  await page.screenshot({ path: 'screenshot-submit.png', fullPage: false });

  // Submit
  await page.click('button[type="submit"]');
  await page.waitForTimeout(1000);

  const successVisible = await page.isVisible('#form-success');
  console.log('Form submission success message visible:', successVisible);

  // Test 5: Mobile view
  console.log('\n--- Test 5: Mobile View ---');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(`${baseUrl}/index.html`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'screenshot-mobile.png', fullPage: false });

  // Check for errors
  console.log('\n--- Errors Found ---');
  if (errors.length === 0) {
    console.log('No errors!');
  } else {
    errors.forEach(e => console.log(e));
  }

  await browser.close();
  console.log('\nTest complete!');
}

test().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
