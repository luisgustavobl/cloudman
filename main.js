
class MetricCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');

        const icon = document.createElement('i');
        icon.setAttribute('class', this.getAttribute('icon'));

        const textContent = document.createElement('div');
        const title = document.createElement('h3');
        title.textContent = this.getAttribute('title');
        const valueEl = document.createElement('p');
        
        const unitPrefix = this.getAttribute('unit-prefix') || '';
        const unitSuffix = this.getAttribute('unit-suffix') || '';
        const value = parseFloat(this.getAttribute('value'));

        const style = document.createElement('style');
        style.textContent = `
            :host {
                --card-bg: rgba(31, 40, 51, 0.75);
                --border-color: #45a29e;
                --primary-color: #00BFFF;
                --glow-color: rgba(0, 191, 255, 0.5);
            }
            .wrapper {
                background: var(--card-bg);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                padding: 1.5rem;
                display: flex;
                align-items: center;
                gap: 1.5rem;
                transition: all 0.3s ease;
                backdrop-filter: blur(5px);
            }
            .wrapper:hover {
                transform: translateY(-5px);
                box-shadow: 0 0 20px var(--glow-color), inset 0 0 15px rgba(0, 191, 255, 0.2);
            }
            i {
                font-size: 1.8rem;
                color: var(--primary-color);
                text-shadow: 0 0 10px var(--glow-color);
            }
            h3 {
                margin: 0;
                font-size: 1rem;
                font-weight: 400;
                color: #aaa;
            }
            p {
                margin: 0.25rem 0 0;
                font-size: 2rem;
                font-weight: 600;
                color: #fff;
                text-shadow: 0 0 5px var(--glow-color);
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(textContent);
        textContent.appendChild(title);
        textContent.appendChild(valueEl);

        const animateValue = () => {
            const duration = 1500;
            const startTime = performance.now();

            const step = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                if (elapsedTime > duration) {
                    valueEl.textContent = `${unitPrefix}${value.toLocaleString()}${unitSuffix}`;
                    return;
                }
                const progress = elapsedTime / duration;
                const animatedValue = progress * value;
                valueEl.textContent = `${unitPrefix}${animatedValue.toFixed(1)}${unitSuffix}`;
                requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };
        
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                animateValue();
                observer.disconnect();
            }
        });
        observer.observe(this);
    }
}
customElements.define('metric-card', MetricCard);

// Chart Default Configs
Chart.defaults.color = '#E0E0E0';
Chart.defaults.borderColor = 'rgba(69, 162, 158, 0.3)';

const primaryColor = '#00BFFF';
const glowColor = 'rgba(0, 191, 255, 0.5)';

// Energy Chart (Line)
const energyCtx = document.getElementById('energy-chart').getContext('2d');
const energyChart = new Chart(energyCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Energy Consumption (kWh)',
            data: [120, 150, 180, 220, 200, 250, 280],
            borderColor: primaryColor,
            backgroundColor: 'rgba(0, 191, 255, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: primaryColor,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointHoverBorderColor: glowColor,
            pointHoverBackgroundColor: primaryColor,
        }]
    }
});

// Service Chart (Bar)
const serviceCtx = document.getElementById('service-chart').getContext('2d');
const serviceChart = new Chart(serviceCtx, {
    type: 'bar',
    data: {
        labels: ['Compute', 'Storage', 'BigQuery', 'Kubernetes'],
        datasets: [{
            label: 'Energy Consumption (kWh)',
            data: [1200, 450, 600, 330],
            backgroundColor: ['#00BFFF', '#33CFFF', '#66DFFF', '#99EFFF'],
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Cost Chart (Doughnut)
const costCtx = document.getElementById('cost-chart').getContext('2d');
const costChart = new Chart(costCtx, {
    type: 'doughnut',
    data: {
        labels: ['Compute', 'Storage', 'Database', 'Networking'],
        datasets: [{
            data: [130.50, 45.20, 90.00, 47.00],
            backgroundColor: ['#00BFFF', '#33CFFF', '#66DFFF', '#99EFFF'],
            borderColor: 'rgba(31, 40, 51, 0.8)',
            borderWidth: 4
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});
