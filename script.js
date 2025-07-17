const { createRoot } = ReactDOM;
const root = createRoot(document.body);

function App() {
    return (
        <div className="main-wrap">
            <header className="top-banner" style={{ opacity: 1 }}>
                <h1>Welcome to TaskFlow</h1>
                <p>Hey there! Today is Thursday, July 17, 2025. Let’s get your tasks sorted!</p>
                <button className="join-button">Join the Fun</button>
            </header>
            <section className="feature-spot" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={el => {
                if (el) {
                    const observer = new IntersectionObserver(([entry]) => {
                        if (entry.isIntersecting) el.style.opacity = 1;
                    }, { threshold: 0.1 });
                    observer.observe(el);
                }
            }}>
                <h2>What Makes TaskFlow Awesome</h2>
                <div className="feature-group">
                    <div className="feature-card">
                        <span className="icon">📅</span>
                        <p>Plan your day with a cozy schedule</p>
                    </div>
                    <div className="feature-card">
                        <span className="icon">✅</span>
                        <p>Check off tasks with a smile</p>
                    </div>
                    <div className="feature-card">
                        <span className="icon">⏰</span>
                        <p>Get gentle reminders</p>
                    </div>
                </div>
            </section>
            <section className="story-spot" style={{ opacity: 0, transition: 'opacity 0.5s 0.2s' }} ref={el => {
                if (el) {
                    const observer = new IntersectionObserver(([entry]) => {
                        if (entry.isIntersecting) el.style.opacity = 1;
                    }, { threshold: 0.1 });
                    observer.observe(el);
                }
            }}>
                <h2>What Our Friends Say</h2>
                <div className="story-group">
                    <p>"TaskFlow makes my day so much brighter!" - Jane</p>
                    <p>"Love how simple it is—reminders are a lifesaver!" - Mike</p>
                </div>
            </section>
            <section className="price-spot" style={{ opacity: 0, transition: 'opacity 0.5s 0.4s' }} ref={el => {
                if (el) {
                    const observer = new IntersectionObserver(([entry]) => {
                        if (entry.isIntersecting) el.style.opacity = 1;
                    }, { threshold: 0.1 });
                    observer.observe(el);
                }
            }}>
                <h2>Choose Your Plan</h2>
                <div className="price-group">
                    <div className="price-card">Free</div>
                    <div className="price-card">Pro - $5/month</div>
                    <div className="price-card">Team - $10/month</div>
                </div>
            </section>
            <footer className="bottom-bar">
                <p>© 2025 TaskFlow. We’re here for you!</p>
            </footer>
        </div>
    );
}

root.render(<App />);