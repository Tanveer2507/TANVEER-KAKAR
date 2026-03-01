# How to Generate Resume PDF

## Method 1: Using Browser (Recommended)

1. Open `public/generate-resume.html` in your browser
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac) to open Print dialog
3. Select "Save as PDF" as the destination
4. Save the file as `Tanveer_Kakar_Resume.pdf` in the `public` folder
5. The download button on the website will now work!

## Method 2: Using Online Tools

1. Open `public/generate-resume.html` in your browser
2. Copy the entire page content
3. Go to any HTML to PDF converter online (like html2pdf.com)
4. Paste the HTML and convert to PDF
5. Save as `Tanveer_Kakar_Resume.pdf` in the `public` folder

## Method 3: Using Node.js (Advanced)

If you want to automate PDF generation, you can use puppeteer:

```bash
npm install puppeteer
```

Then create a script to generate PDF programmatically.

## Note

The resume HTML file (`generate-resume.html`) contains all your information formatted professionally. 
Once you generate the PDF and place it in the `public` folder, the "Download Resume" button on your 
portfolio website will automatically download it when clicked.
