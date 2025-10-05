/**
 * Enhanced Code Block Functionality
 * - Adds copy buttons to code blocks
 * - Adds language labels
 * - Improves code block presentation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons and language labels to code blocks
    const highlights = document.querySelectorAll('.highlight');
    
    highlights.forEach(function(highlight) {
        const pre = highlight.querySelector('pre');
        const code = highlight.querySelector('code');
        
        if (!pre || !code) return;
        
        // Get language from class name
        let language = '';
        const codeClasses = code.className.split(' ');
        for (let cls of codeClasses) {
            if (cls.startsWith('language-')) {
                language = cls.replace('language-', '');
                break;
            }
        }
        
        // Set data-lang attribute for CSS styling
        if (language) {
            highlight.setAttribute('data-lang', language);
        }
        
        // Create copy button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'code-copy-btn';
        copyBtn.textContent = 'Copy';
        copyBtn.title = 'Copy code to clipboard';
        
        // Add click handler for copy functionality
        copyBtn.addEventListener('click', function() {
            const text = code.textContent || code.innerText;
            
            // Use modern clipboard API if available
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(function() {
                    showCopySuccess(copyBtn);
                }).catch(function(err) {
                    fallbackCopy(text, copyBtn);
                });
            } else {
                fallbackCopy(text, copyBtn);
            }
        });
        
        // Insert copy button into highlight container
        highlight.style.position = 'relative';
        highlight.appendChild(copyBtn);
    });
    
    function showCopySuccess(button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }
    
    function fallbackCopy(text, button) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showCopySuccess(button);
            }
        } catch (err) {
            console.error('Copy failed:', err);
        }
        
        document.body.removeChild(textArea);
    }
    
    // Add keyboard shortcut for copying focused code block
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            const focusedElement = document.activeElement;
            const codeBlock = focusedElement.closest('.highlight');
            if (codeBlock) {
                const copyBtn = codeBlock.querySelector('.code-copy-btn');
                if (copyBtn) {
                    copyBtn.click();
                    e.preventDefault();
                }
            }
        }
    });
    
    // Make code blocks focusable for accessibility
    highlights.forEach(function(highlight) {
        highlight.setAttribute('tabindex', '0');
        highlight.setAttribute('role', 'region');
        highlight.setAttribute('aria-label', 'Code block');
    });
});

// Add syntax highlighting for dynamically loaded content
function enhanceCodeBlocks(container = document) {
    const script = document.createElement('script');
    script.textContent = `
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
        }
    `;
    container.appendChild(script);
}

// Export for potential use in other scripts
window.enhanceCodeBlocks = enhanceCodeBlocks;