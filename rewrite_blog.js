const fs = require('fs');

let template = fs.readFileSync('portfolio.html', 'utf8');

// The new cards based on vanilla CSS styling
const cards = `
    <section id="blog-page" class="pt-32" style="min-height: 80vh;">
        <div class="container">
            <div class="reveal" style="text-align:center;">
                <h1 class="hero-heading" style="font-size: 3rem; margin-bottom: 1rem;">Insights & <span class="accent">Updates</span></h1>
                <p class="section-sub" style="margin:0 auto; max-width: 600px;">Industry news, marketing strategies, and expert advice to help you grow your brand in the digital world.</p>
            </div>

            <div class="stagger-children" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; margin-top: 4rem; padding-bottom: 4rem;">
                <!-- Card 1 -->
                <a href="#" class="service-card" style="padding: 0; display: flex; flex-direction: column; text-decoration: none;">
                    <div style="height: 220px; overflow: hidden; position: relative; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                        <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Instagram Growth" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
                        <div style="position: absolute; top: 1rem; left: 1rem; background: #ec4899; color: white; padding: 4px 14px; border-radius: 999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; z-index: 2;">Social Media</div>
                    </div>
                    <div style="padding: 2rem; flex-grow: 1; display: flex; flex-direction: column;">
                        <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">calendar_today</span> Feb 20, 2025</span>
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">schedule</span> 4 min read</span>
                        </div>
                        <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary); transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-primary)'">10 Instagram Reel Ideas for Real Estate Brands in India</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">Short-form video is the fastest way to build trust with home buyers in 2025. Here are 10 proven Reel concepts that real estate brands in Gujarat are using to generate leads.</p>
                        <div style="margin-top: auto; border-top: 1px solid var(--border); padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #ec4899, #f97316); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.7rem;">DP</div>
                                <span style="font-size: 0.9rem; font-weight: 500; color: var(--text-primary);">Digi Partner</span>
                            </div>
                        </div>
                    </div>
                </a>

                <!-- Card 2 -->
                <a href="#" class="service-card" style="padding: 0; display: flex; flex-direction: column; text-decoration: none;">
                    <div style="height: 220px; overflow: hidden; position: relative; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                        <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Meta Ads" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
                        <div style="position: absolute; top: 1rem; left: 1rem; background: #2563eb; color: white; padding: 4px 14px; border-radius: 999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;">Meta Ads</div>
                    </div>
                    <div style="padding: 2rem; flex-grow: 1; display: flex; flex-direction: column;">
                        <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">calendar_today</span> Feb 10, 2025</span>
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">schedule</span> 5 min read</span>
                        </div>
                        <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary); transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-primary)'">Meta Ads vs Google Ads: Which is Better for Indian SMBs?</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">With limited budgets, Indian small businesses need to pick the right ad platform. We break down ROI, audience targeting, and cost-per-lead.</p>
                        <div style="margin-top: auto; border-top: 1px solid var(--border); padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #6366f1); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.7rem;">DP</div>
                                <span style="font-size: 0.9rem; font-weight: 500; color: var(--text-primary);">Digi Partner</span>
                            </div>
                        </div>
                    </div>
                </a>

                <!-- Card 3 -->
                <a href="#" class="service-card" style="padding: 0; display: flex; flex-direction: column; text-decoration: none;">
                    <div style="height: 220px; overflow: hidden; position: relative; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Brand Design" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
                        <div style="position: absolute; top: 1rem; left: 1rem; background: #9333ea; color: white; padding: 4px 14px; border-radius: 999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;">Design</div>
                    </div>
                    <div style="padding: 2rem; flex-grow: 1; display: flex; flex-direction: column;">
                        <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">calendar_today</span> Jan 28, 2025</span>
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">schedule</span> 4 min read</span>
                        </div>
                        <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary); transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-primary)'">5 Logo Design Trends Dominating Indian Brands in 2025</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">From minimalist wordmarks to bold serif resurgence, India's top brands are reshaping their visual identities. See what's in.</p>
                        <div style="margin-top: auto; border-top: 1px solid var(--border); padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #a855f7, #ec4899); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.7rem;">DP</div>
                                <span style="font-size: 0.9rem; font-weight: 500; color: var(--text-primary);">Digi Partner</span>
                            </div>
                        </div>
                    </div>
                </a>

                <!-- Card 4 -->
                <a href="#" class="service-card" style="padding: 0; display: flex; flex-direction: column; text-decoration: none;">
                    <div style="height: 220px; overflow: hidden; position: relative; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="SEO Guide" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
                        <div style="position: absolute; top: 1rem; left: 1rem; background: #16a34a; color: white; padding: 4px 14px; border-radius: 999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;">SEO</div>
                    </div>
                    <div style="padding: 2rem; flex-grow: 1; display: flex; flex-direction: column;">
                        <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">calendar_today</span> Jan 15, 2025</span>
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">schedule</span> 7 min read</span>
                        </div>
                        <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary); transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-primary)'">Local SEO Guide for Surat Businesses: Rank #1 on Google Maps</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">Over 80% of local searches lead to a store visit. Here's how Surat businesses can optimise their Google Business Profile and rank.</p>
                        <div style="margin-top: auto; border-top: 1px solid var(--border); padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #22c55e, #14b8a6); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.7rem;">DP</div>
                                <span style="font-size: 0.9rem; font-weight: 500; color: var(--text-primary);">Digi Partner</span>
                            </div>
                        </div>
                    </div>
                </a>

                <!-- Card 5 -->
                <a href="#" class="service-card" style="padding: 0; display: flex; flex-direction: column; text-decoration: none;">
                    <div style="height: 220px; overflow: hidden; position: relative; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                        <img src="https://images.unsplash.com/photo-1542744094-24638ea0b46c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="WhatsApp Marketing" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
                        <div style="position: absolute; top: 1rem; left: 1rem; background: #ea580c; color: white; padding: 4px 14px; border-radius: 999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;">Marketing</div>
                    </div>
                    <div style="padding: 2rem; flex-grow: 1; display: flex; flex-direction: column;">
                        <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">calendar_today</span> Jan 05, 2025</span>
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">schedule</span> 5 min read</span>
                        </div>
                        <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary); transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-primary)'">WhatsApp Marketing: The Untapped Growth Channel</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">With 500 million+ WhatsApp users in India, it's the most direct line to your customer. Learn how to use broadcast lists and catalogues.</p>
                        <div style="margin-top: auto; border-top: 1px solid var(--border); padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #f97316, #ef4444); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.7rem;">DP</div>
                                <span style="font-size: 0.9rem; font-weight: 500; color: var(--text-primary);">Digi Partner</span>
                            </div>
                        </div>
                    </div>
                </a>

                <!-- Card 6 -->
                <a href="#" class="service-card" style="padding: 0; display: flex; flex-direction: column; text-decoration: none;">
                    <div style="height: 220px; overflow: hidden; position: relative; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                        <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Content Calendar" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
                        <div style="position: absolute; top: 1rem; left: 1rem; background: #ec4899; color: white; padding: 4px 14px; border-radius: 999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;">Content</div>
                    </div>
                    <div style="padding: 2rem; flex-grow: 1; display: flex; flex-direction: column;">
                        <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">calendar_today</span> Dec 20, 2024</span>
                            <span style="display: flex; align-items: center; gap: 0.25rem;"><span class="material-icons" style="font-size: 1rem;">schedule</span> 3 min read</span>
                        </div>
                        <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary); transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-primary)'">How to Build a 30-Day Social Media Content Calendar</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">Consistency is the #1 factor in social media growth. We share our exact template and strategy for planning an entire month of posts.</p>
                        <div style="margin-top: auto; border-top: 1px solid var(--border); padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #ec4899, #f43f5e); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.7rem;">DP</div>
                                <span style="font-size: 0.9rem; font-weight: 500; color: var(--text-primary);">Digi Partner</span>
                            </div>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    </section>
`;

let mainStart = template.indexOf('<section class="hero">');
let footerStart = template.indexOf('<footer class="glass-footer">');

let newPage = template.substring(0, mainStart) + cards + template.substring(footerStart);

newPage = newPage.replace(/<title>.*?<\/title>/, '<title>Blog - Digital Marketing Tips and Insights | DIGI PARTNER</title>');
newPage = newPage.replace('<a href="portfolio.html" class="nav-link active">Portfolio</a>', '<a href="portfolio.html" class="nav-link">Portfolio</a>');
newPage = newPage.replace('<a href="blog.html" class="nav-link">Blog</a>', '<a href="blog.html" class="nav-link active">Blog</a>');

fs.writeFileSync('blog.html', newPage, 'utf8');
console.log('Successfully re-wrote blog.html based on portfolio.html and vanilla CSS.');
