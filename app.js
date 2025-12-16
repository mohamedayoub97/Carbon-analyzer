
// ==================== COMPREHENSIVE EMISSION DATA (93 ACTIVITIES) ====================

const emissionData = {
    scope1: {
        title: "Scope 1 - Émissions Directes",
        categories: {
            "Combustibles fossiles": [
                {name: "Essence", unit: "litre", factor: 2.31},
                {name: "Diesel", unit: "litre", factor: 2.68},
                {name: "Gaz de Pétrole Liquéfié - GPL", unit: "litre", factor: 1.51},
                {name: "Gaz naturel", unit: "m³", factor: 2.04},
                {name: "Charbon", unit: "kg", factor: 2.40},
                {name: "Fioul domestique", unit: "litre", factor: 3.15},
                {name: "Fioul lourd", unit: "litre", factor: 3.20},
                {name: "Kérosène", unit: "litre", factor: 2.51},
                {name: "Propane", unit: "litre", factor: 1.64},
                {name: "Butane", unit: "litre", factor: 1.53},
                {name: "Biocarburants", unit: "litre", factor: 0.50}
            ],
            "Gaz réfrigérants et climatisation": [
                {name: "HFC (Hydrofluorocarbures)", unit: "kg", factor: 4430},
                {name: "PFC (Perfluorocarbures)", unit: "kg", factor: 10000},
                {name: "SF6 (Hexafluorure de soufre)", unit: "kg", factor: 23500},
                {name: "R-410A, R-134a, R-404A", unit: "kg", factor: 2088}
            ],
            "Processus industriels": [
                {name: "Ciment", unit: "kg", factor: 0.92},
                {name: "Chaux", unit: "kg", factor: 1.20},
                {name: "Ammoniac", unit: "kg", factor: 2.45},
                {name: "Acide nitrique", unit: "kg", factor: 6.80}
            ]
        }
    },
    scope2: {
        title: "Scope 2 - Émissions Indirectes Liées à l'Énergie",
        categories: {
            "Énergie": [
                {name: "Électricité (Tunisie)", unit: "kWh", factor: 0.468},
                {name: "Électricité (autre pays)", unit: "kWh", factor: 0.400},
                {name: "Chauffage urbain", unit: "kWh", factor: 0.15},
                {name: "Refroidissement urbain", unit: "kWh", factor: 0.12},
                {name: "Vapeur", unit: "kWh", factor: 0.10},
                {name: "Électricité autoconsommée", unit: "kWh", factor: 0.0}
            ]
        }
    },
    scope3: {
        title: "Scope 3 - Autres Émissions Indirectes",
        categories: {
            "Catégorie 1 : Biens et services achetés": [
                {name: "Papier", unit: "kg", factor: 1.20},
                {name: "Carton", unit: "kg", factor: 0.80},
                {name: "Plastique", unit: "kg", factor: 3.50},
                {name: "Métal", unit: "kg", factor: 2.70},
                {name: "Électronique", unit: "unités", factor: 50.0},
                {name: "Mobilier", unit: "unités", factor: 100.0},
                {name: "Fournitures de bureau", unit: "kg", factor: 2.50},
                {name: "Produits chimiques", unit: "kg", factor: 4.20},
                {name: "Vêtements de travail", unit: "kg", factor: 8.50}
            ],
            "Catégorie 2 : Biens d'équipement": [
                {name: "Ordinateurs", unit: "unités", factor: 200.0},
                {name: "Serveurs", unit: "unités", factor: 500.0},
                {name: "Véhicules achetés", unit: "unités", factor: 5000.0},
                {name: "Machines industrielles", unit: "unités", factor: 1500.0},
                {name: "Bâtiments construits", unit: "m²", factor: 150.0}
            ],
            "Catégorie 3 : Énergie non incluse": [
                {name: "Production de combustibles", unit: "litre", factor: 0.30},
                {name: "Transport et distribution d'énergie", unit: "kWh", factor: 0.05}
            ],
            "Catégorie 4 : Transport amont": [
                {name: "Camion", unit: "km-t", factor: 0.09},
                {name: "Train de marchandises", unit: "km-t", factor: 0.02},
                {name: "Bateau", unit: "km-t", factor: 0.01},
                {name: "Avion cargo", unit: "km-t", factor: 0.50},
                {name: "Fret maritime", unit: "TEU-km", factor: 0.008}
            ],
            "Catégorie 5 : Déchets": [
                {name: "Déchets non dangereux", unit: "kg", factor: 0.50},
                {name: "Déchets dangereux", unit: "kg", factor: 1.50},
                {name: "Déchets recyclés", unit: "kg", factor: 0.15},
                {name: "Déchets incinérés", unit: "kg", factor: 2.50},
                {name: "Déchets en décharge", unit: "kg", factor: 1.80},
                {name: "Déchets organiques/compost", unit: "kg", factor: 0.30}
            ],
            "Catégorie 6 : Déplacements professionnels": [
                {name: "Voiture personnelle", unit: "km", factor: 0.21},
                {name: "Voiture de location", unit: "km", factor: 0.21},
                {name: "Avion - court courrier", unit: "km", factor: 0.000255},
                {name: "Avion - moyen courrier", unit: "km", factor: 0.000175},
                {name: "Avion - long courrier", unit: "km", factor: 0.000155},
                {name: "Train", unit: "km", factor: 0.000041},
                {name: "Bus", unit: "km", factor: 0.000089},
                {name: "Taxi", unit: "km", factor: 0.000210},
                {name: "Métro/Tramway", unit: "km", factor: 0.000050},
                {name: "Hôtel", unit: "nuitées", factor: 25.0},
                {name: "Restaurant", unit: "repas", factor: 2.50}
            ],
            "Catégorie 7 : Déplacements domicile-travail": [
                {name: "Voiture", unit: "km", factor: 0.21},
                {name: "Transport en commun", unit: "km", factor: 0.000089},
                {name: "Moto/Scooter", unit: "km", factor: 0.150},
                {name: "Vélo électrique", unit: "km", factor: 0.010},
                {name: "Covoiturage", unit: "km", factor: 0.105}
            ],
            "Catégorie 8 : Actifs loués (amont)": [
                {name: "Bâtiments loués", unit: "m²", factor: 0.15},
                {name: "Véhicules loués", unit: "km", factor: 0.21},
                {name: "Équipements loués", unit: "unités", factor: 50.0}
            ],
            "Catégorie 9 : Transport aval": [
                {name: "Livraison clients - camion", unit: "km-t", factor: 0.09},
                {name: "Livraison clients - avion", unit: "km-t", factor: 0.50},
                {name: "Distribution finale", unit: "km", factor: 0.21}
            ],
            "Catégorie 10 : Transformation": [
                {name: "Énergie de transformation", unit: "kWh", factor: 0.468},
                {name: "Matières de transformation", unit: "kg", factor: 2.50}
            ],
            "Catégorie 11 : Utilisation des produits": [
                {name: "Électricité consommée", unit: "kWh", factor: 0.468},
                {name: "Carburant consommé", unit: "litre", factor: 2.31}
            ],
            "Catégorie 12 : Fin de vie": [
                {name: "Recyclage des produits", unit: "kg", factor: 0.20},
                {name: "Incinération des produits", unit: "kg", factor: 2.50},
                {name: "Enfouissement des produits", unit: "kg", factor: 1.80}
            ],
            "Catégorie 13 : Actifs loués (aval)": [
                {name: "Bâtiments loués à des tiers", unit: "m²", factor: 0.15}
            ],
            "Catégorie 14 : Franchises": [
                {name: "Émissions des franchises", unit: "tCO2e", factor: 1.0}
            ],
            "Catégorie 15 : Investissements": [
                {name: "Actions et obligations", unit: "€", factor: 0.00025},
                {name: "Prêts", unit: "€", factor: 0.00015}
            ],
            "Autres catégories transversales": [
                {name: "Eau potable", unit: "m³", factor: 0.30},
                {name: "Eaux usées", unit: "m³", factor: 0.50},
                {name: "Numérique - Data centers", unit: "kWh", factor: 0.468},
                {name: "Numérique - Cloud computing", unit: "Go", factor: 0.001},
                {name: "Télécommunications", unit: "minutes/Go", factor: 0.0001},
                {name: "Publicité et marketing", unit: "€", factor: 0.0005},
                {name: "Services bancaires", unit: "transactions", factor: 0.05},
                {name: "Assurances", unit: "€", factor: 0.00020}
            ]
        }
    }
};

let calculationResults = {scope1: 0, scope2: 0, scope3: 0, total: 0, details: {}};
let pieChart = null;
let barChart = null;

// ==================== INITIALIZATION ====================
window.addEventListener('DOMContentLoaded', () => {
    renderEmissionForms();
    loadTheme();
    animateShooting();
});

// ==================== RENDERING ====================
function renderEmissionForms() {
    renderScopeForm('scope1');
    renderScopeForm('scope2');
    renderScopeForm('scope3');
    renderFactorsTable();
}

function renderScopeForm(scopeName) {
    const scope = emissionData[scopeName];
    const container = document.getElementById(`${scopeName}-content`);
    let html = '';

    for (const [category, activities] of Object.entries(scope.categories)) {
        html += `
            <div class="category-section">
                <div class="category-title">📌 ${category}</div>
                <div class="category-items">
        `;

        activities.forEach((activity, idx) => {
            const inputId = `${scopeName}_${category}_${idx}`;
            html += `
                <div class="activity-input">
                    <label>${activity.name}</label>
                    <input type="number" id="${inputId}" placeholder="0" min="0" step="0.01">
                    <small>${activity.unit} × ${activity.factor}</small>
                </div>
            `;
        });

        html += `</div></div>`;
    }

    container.innerHTML = html;
}

function renderFactorsTable() {
    const container = document.getElementById('factors-content');
    let html = '<table><thead><tr><th>Scope</th><th>Catégorie</th><th>Activité</th><th>Unité</th><th>Facteur (kg CO2e)</th></tr></thead><tbody>';

    ['scope1', 'scope2', 'scope3'].forEach(scopeName => {
        const scope = emissionData[scopeName];
        for (const [category, activities] of Object.entries(scope.categories)) {
            activities.forEach(activity => {
                html += `<tr><td>${scopeName.replace('scope', 'Scope ')}</td><td>${category}</td><td>${activity.name}</td><td>${activity.unit}</td><td><input type="number" value="${activity.factor}" class="factor-input" style="width:100%;"></td></tr>`;
            });
        }
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

// ==================== CALCULATIONS ====================
function calculateScope1() {
    const scope = emissionData.scope1;
    let total = 0;
    calculationResults.details.scope1 = {};

    for (const [category, activities] of Object.entries(scope.categories)) {
        let categoryTotal = 0;
        activities.forEach((activity, idx) => {
            const inputId = `scope1_${category}_${idx}`;
            const input = document.getElementById(inputId);
            const quantity = parseFloat(input.value) || 0;
            const result = quantity * activity.factor;
            categoryTotal += result;
            total += result;
        });
        calculationResults.details.scope1[category] = categoryTotal;
    }

    calculationResults.scope1 = total;
    document.getElementById('scope1-result').textContent = total.toFixed(2);
    return total;
}

function calculateScope2() {
    const scope = emissionData.scope2;
    let total = 0;
    calculationResults.details.scope2 = {};

    for (const [category, activities] of Object.entries(scope.categories)) {
        let categoryTotal = 0;
        activities.forEach((activity, idx) => {
            const inputId = `scope2_${category}_${idx}`;
            const input = document.getElementById(inputId);
            const quantity = parseFloat(input.value) || 0;
            const result = quantity * activity.factor;
            categoryTotal += result;
            total += result;
        });
        calculationResults.details.scope2[category] = categoryTotal;
    }

    calculationResults.scope2 = total;
    document.getElementById('scope2-result').textContent = total.toFixed(2);
    return total;
}

function calculateScope3() {
    const scope = emissionData.scope3;
    let total = 0;
    calculationResults.details.scope3 = {};

    for (const [category, activities] of Object.entries(scope.categories)) {
        let categoryTotal = 0;
        activities.forEach((activity, idx) => {
            const inputId = `scope3_${category}_${idx}`;
            const input = document.getElementById(inputId);
            const quantity = parseFloat(input.value) || 0;
            const result = quantity * activity.factor;
            categoryTotal += result;
            total += result;
        });
        calculationResults.details.scope3[category] = categoryTotal;
    }

    calculationResults.scope3 = total;
    document.getElementById('scope3-result').textContent = total.toFixed(2);
    return total;
}

function calculateTotal() {
    const s1 = calculateScope1();
    const s2 = calculateScope2();
    const s3 = calculateScope3();
    const total = s1 + s2 + s3;

    calculationResults.total = total;
    document.getElementById('total-result').textContent = total.toFixed(2);

    updateGraphs();
    displayDetailedResults();
    generateRecommendations();
    generateActionPlan();
    generateExecutiveSummary();
}

// ==================== GRAPHS ====================
function updateGraphs() {
    const {scope1, scope2, scope3, total} = calculationResults;

    if (pieChart) pieChart.destroy();
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Scope 1', 'Scope 2', 'Scope 3'],
            datasets: [{
                data: [scope1, scope2, scope3],
                backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
                borderColor: '#1a1f3a',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {position: 'bottom'},
                tooltip: {callbacks: {label: function(ctx) {return ctx.label + ': ' + ctx.parsed + ' kg CO2e';}}}
            }
        }
    });

    if (barChart) barChart.destroy();
    const barCtx = document.getElementById('barChart').getContext('2d');
    barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Scope 1', 'Scope 2', 'Scope 3'],
            datasets: [{
                label: 'Émissions (kg CO2e)',
                data: [scope1, scope2, scope3],
                backgroundColor: ['#10B981', '#2D5F4F', '#FFA07A'],
                borderColor: '#1a1f3a',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {beginAtZero: true}
            },
            plugins: {
                legend: {display: true}
            }
        }
    });
}

// ==================== DETAILED RESULTS ====================
function displayDetailedResults() {
    const tbody = document.getElementById('detailed-results');
    let html = '';
    const {total} = calculationResults;

    ['scope1', 'scope2', 'scope3'].forEach(scopeName => {
        const details = calculationResults.details[scopeName];
        for (const [category, value] of Object.entries(details)) {
            if (value > 0) {
                const percentage = ((value / total) * 100).toFixed(1);
                html += `
                    <tr>
                        <td>${scopeName.replace('scope', 'Scope ')}</td>
                        <td>${category}</td>
                        <td>${value.toFixed(2)}</td>
                        <td>${percentage}%</td>
                    </tr>
                `;
            }
        }
    });

    tbody.innerHTML = html || '<tr><td colspan="4">Aucune émission enregistrée</td></tr>';
}

// ==================== RECOMMENDATIONS ====================
function generateRecommendations() {
    const recs = document.getElementById('recommendations');
    const {scope1, scope2, scope3, total} = calculationResults;
    let html = '';

    if (scope1 > total * 0.3) {
        html += `<div class="recommendation">
            🚗 <strong>Réduire Scope 1:</strong> Vos émissions directes représentent ${((scope1/total)*100).toFixed(1)}% du total.
            <br>Actions: Optimisez les trajets, envisagez des véhicules électriques, réduisez la consommation de carburants.
        </div>`;
    }

    if (scope2 > total * 0.3) {
        html += `<div class="recommendation">
            ⚡ <strong>Réduire Scope 2:</strong> Vos émissions énergétiques représentent ${((scope2/total)*100).toFixed(1)}% du total.
            <br>Actions: Passez à une énergie renouvelable, améliorez l'efficacité énergétique, auditez vos installations.
        </div>`;
    }

    if (scope3 > total * 0.3) {
        html += `<div class="recommendation">
            🌍 <strong>Réduire Scope 3:</strong> Vos émissions indirectes représentent ${((scope3/total)*100).toFixed(1)}% du total.
            <br>Actions: Optimisez votre chaîne d'approvisionnement, réduisez les déchets, revoyez vos fournisseurs.
        </div>`;
    }

    if (total > 0) {
        html += `<div class="recommendation">
            ✅ <strong>Stratégie Globale:</strong> Mettez en place un programme de réduction carbone avec des objectifs mesurables.
            <br>Empreinte carbone totale: <strong>${total.toFixed(2)} kg CO2e</strong>
        </div>`;
    }

    recs.innerHTML = html || '<p style="color: var(--text-secondary);">Entrez des données pour recevoir des recommandations.</p>';
}

function generateActionPlan() {
    const plan = document.getElementById('action-plan');
    const {total} = calculationResults;

    if (total > 0) {
        plan.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 8px;">
                <h4>Plan d'Action Recommandé:</h4>
                <ol style="margin-top: 10px;">
                    <li>Audit énergétique complet dans les 3 mois</li>
                    <li>Identification des points chauds (top 20% émetteurs)</li>
                    <li>Fixation d'objectifs de réduction (10-15% par an)</li>
                    <li>Mise en œuvre de solutions prioritaires</li>
                    <li>Suivi mensuel et rapports trimestriels</li>
                    <li>Certification ISO 14064 ou équivalent</li>
                </ol>
            </div>
        `;
    }
}

function generateExecutiveSummary() {
    const summary = document.getElementById('executive-summary');
    const {scope1, scope2, scope3, total} = calculationResults;

    if (total > 0) {
        const company = document.getElementById('companyName').value || 'Votre entreprise';
        summary.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 8px;">
                <h4>Résumé Exécutif</h4>
                <p><strong>Entreprise:</strong> ${company}</p>
                <p><strong>Date d'analyse:</strong> ${new Date().toLocaleDateString('fr-FR')}</p>
                <p><strong>Empreinte Carbone Totale:</strong> ${total.toFixed(2)} kg CO2e</p>
                <p><strong>Scope 1 (Directes):</strong> ${scope1.toFixed(2)} kg (${((scope1/total)*100).toFixed(1)}%)</p>
                <p><strong>Scope 2 (Énergie):</strong> ${scope2.toFixed(2)} kg (${((scope2/total)*100).toFixed(1)}%)</p>
                <p><strong>Scope 3 (Indirectes):</strong> ${scope3.toFixed(2)} kg (${((scope3/total)*100).toFixed(1)}%)</p>
                <p style="margin-top: 15px; font-size: 0.9rem;">
                    <em>Données sources: IEA 2020 | GHG Protocol</em>
                </p>
            </div>
        `;
    }
}

// ==================== THEME & UI ====================
function toggleTheme() {
    const body = document.body;
    const theme = body.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    document.getElementById('toggleBtn').classList.toggle('active');
    document.getElementById('themeIcon').textContent = newTheme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('theme', newTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        document.getElementById('toggleBtn').classList.add('active');
        document.getElementById('themeIcon').textContent = '☀️';
    }
}

function showTab(event, tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.accordion-arrow');
    content.classList.toggle('active');
    arrow.classList.toggle('active');
}

// ==================== EXPORT ====================
function exportReport() {
    const {scope1, scope2, scope3, total} = calculationResults;
    const company = document.getElementById('companyName').value || 'Entreprise';

    const text = `RAPPORT D'ANALYSE DU BILAN CARBONE
=====================================
Entreprise: ${company}
Date: ${new Date().toLocaleDateString('fr-FR')}

RÉSUMÉ
------
Empreinte Carbone Totale: ${total.toFixed(2)} kg CO2e
Scope 1 (Directes): ${scope1.toFixed(2)} kg (${((scope1/total)*100).toFixed(1)}%)
Scope 2 (Énergie): ${scope2.toFixed(2)} kg (${((scope2/total)*100).toFixed(1)}%)
Scope 3 (Indirectes): ${scope3.toFixed(2)} kg (${((scope3/total)*100).toFixed(1)}%)

Données sources: IEA 2020
Application: Carbon Footprint Analysis (93 activités)
© 2025 Mohamed Ayoub Essalami
    `;

    const blob = new Blob([text], {type: 'text/plain'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Bilan_Carbone_${company}_${new Date().toISOString().slice(0,10)}.txt`;
    a.click();
}

function exportCSV() {
    const {total, details} = calculationResults;
    const company = document.getElementById('companyName').value || 'Entreprise';

    let csv = 'Scope,Catégorie,Émissions (kg CO2e)\n';

    ['scope1', 'scope2', 'scope3'].forEach(scope => {
        for (const [cat, val] of Object.entries(details[scope] || {})) {
            csv += `${scope},${cat},${val.toFixed(2)}\n`;
        }
    });

    csv += `TOTAL,Toutes catégories,${total.toFixed(2)}\n`;

    const blob = new Blob([csv], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Bilan_Carbone_${company}_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
}

// ==================== SHOOTING STARS ====================
class ShootingStar {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.6;
        this.speedX = (Math.random() - 0.5) * 8;
        this.speedY = (Math.random() + 1) * 4;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    draw(ctx) {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.speedX * 0.2, this.y - this.speedY * 0.2);
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.015;
    }

    isAlive() {
        return this.opacity > 0 && this.y < this.canvas.height && this.x < this.canvas.width && this.x > 0;
    }
}

let shootingStars = [];

function animateShooting() {
    const canvas = document.getElementById('shootingStars');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.1) {
            shootingStars.push(new ShootingStar(canvas));
        }

        shootingStars = shootingStars.filter(star => star.isAlive());
        shootingStars.forEach(star => {
            star.update();
            star.draw(ctx);
        });

        const theme = document.body.getAttribute('data-theme');
        if (theme === 'dark') {
            requestAnimationFrame(animate);
        }
    }

    animate();
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ==================== SENSITIVITY SLIDER ====================
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('sensitivitySlider');
    if (slider) {
        slider.addEventListener('input', function() {
            document.getElementById('sensitivityValue').textContent = this.value;
            const newTotal = calculationResults.total * (1 + (this.value / 100));
            document.getElementById('sensitivityResult').textContent = newTotal.toFixed(2);
        });
    }
});
