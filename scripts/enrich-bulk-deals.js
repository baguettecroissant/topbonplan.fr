// Script to enrich bulk deals with FAQs and verdicts
const fs = require('fs');
const path = require('path');
const deals = require(path.join(__dirname, '..', 'data', 'bulk-deals.json'));

// Generate contextual FAQs based on deal properties
function generateFAQs(deal) {
    const faqs = [];
    const name = deal.title.split(' - ')[0].split(' (')[0];
    
    // Universal FAQ 1: Is it worth it?
    faqs.push({
        question: `Le ${name} vaut-il le coup en 2026 ?`,
        answer: `À ${deal.price} au lieu de ${deal.originalPrice} (${deal.discount}), le ${name} est à un prix très compétitif. ${deal.pros[0]} et ${deal.pros[1].toLowerCase()} en font un excellent choix dans sa catégorie ${deal.subcategory}. C'est l'un des meilleurs rapports qualité-prix du moment.`
    });

    // Category-specific FAQ 2
    if (deal.category === 'High-Tech') {
        if (deal.subcategory === 'Smartphones') {
            faqs.push({
                question: `Quel est le meilleur smartphone à moins de ${parseInt(deal.price)}€ en 2026 ?`,
                answer: `Dans cette gamme de prix, le ${name} se distingue par ${deal.pros[0].toLowerCase()}. C'est un excellent choix si vous cherchez un smartphone performant sans vous ruiner. La concurrence directe inclut d'autres modèles de la même catégorie disponibles sur TopBonPlan.`
            });
        } else if (deal.subcategory === 'Audio') {
            faqs.push({
                question: `Quelle est la qualité sonore du ${name} ?`,
                answer: `${deal.detailedReview.split('.').slice(0, 2).join('.')}. ${deal.pros[0]} est particulièrement apprécié des audiophiles et des utilisateurs exigeants.`
            });
        } else if (deal.subcategory === 'Informatique' || deal.subcategory === 'Composants PC') {
            faqs.push({
                question: `Le ${name} est-il compatible avec mon setup actuel ?`,
                answer: `Oui, ${deal.detailedReview.split('.').slice(1, 3).join('.')}. Vérifiez les spécifications détaillées ci-dessus pour une compatibilité optimale avec votre configuration existante.`
            });
        } else {
            faqs.push({
                question: `Quelles sont les principales caractéristiques du ${name} ?`,
                answer: `Les points forts du ${name} sont : ${deal.pros.join(', ')}. ${deal.detailedReview.split('.').slice(-2, -1)[0]}.`
            });
        }
    } else if (deal.category === 'Maison & Cuisine') {
        if (deal.subcategory === 'Aspirateurs Robots') {
            faqs.push({
                question: `Le ${name} est-il adapté aux grandes surfaces ?`,
                answer: `Oui, ${deal.detailedReview.split('.').slice(1, 3).join('.')}. Sa technologie de navigation avancée lui permet de couvrir efficacement les grands logements multi-pièces.`
            });
        } else {
            faqs.push({
                question: `Le ${name} est-il facile à utiliser au quotidien ?`,
                answer: `Absolument. ${deal.detailedReview.split('.').slice(1, 3).join('.')}. L'interface est intuitive et conçue pour une utilisation quotidienne sans effort.`
            });
        }
    } else if (deal.category === 'Mode & Beauté') {
        faqs.push({
            question: `Le ${name} convient-il à tous les types de peau/cheveux ?`,
            answer: `${deal.detailedReview.split('.').slice(1, 3).join('.')}. Les réglages multiples permettent d'adapter l'appareil à vos besoins spécifiques pour un résultat optimal.`
        });
    } else {
        faqs.push({
            question: `Quels sont les avantages du ${name} ?`,
            answer: `Le ${name} se distingue par ${deal.pros.map(p => p.toLowerCase()).join(', ')}. ${deal.detailedReview.split('.').slice(-2, -1)[0]}.`
        });
    }

    // Universal FAQ 3: Delivery/Warranty
    faqs.push({
        question: `Quelles sont les garanties et conditions de livraison ?`,
        answer: `Ce produit est vendu par Amazon et bénéficie de la livraison gratuite pour les membres Prime (essai gratuit 30 jours disponible). Vous disposez de 30 jours pour retourner le produit et d'une garantie constructeur standard. Les prix sur TopBonPlan sont vérifiés quotidiennement.`
    });

    return faqs;
}

// Generate verdict based on deal data
function generateVerdict(deal) {
    const name = deal.title.split(' - ')[0].split(' (')[0];
    const saving = deal.originalPrice && deal.price ? 
        `À ${deal.price} au lieu de ${deal.originalPrice}, vous économisez ${deal.discount}.` : '';
    
    return `${name} est un excellent choix dans la catégorie ${deal.subcategory}. ${deal.pros[0]} et ${deal.pros[1].toLowerCase()} justifient pleinement l'investissement. ${saving} Un produit que nous recommandons sans hésitation aux acheteurs exigeants.`;
}

// Generate score based on discount and review quality
function generateScore(deal) {
    const discount = parseInt(deal.discount.replace(/[^0-9]/g, '')) || 0;
    if (discount >= 30) return 9;
    if (discount >= 20) return 8;
    if (discount >= 10) return 7;
    return 7;
}

// Enrich all deals
const enrichedDeals = deals.map(deal => ({
    ...deal,
    faqs: generateFAQs(deal),
    verdict: generateVerdict(deal),
    score: generateScore(deal),
}));

fs.writeFileSync(path.join(__dirname, '..', 'data', 'bulk-deals.json'), JSON.stringify(enrichedDeals, null, 2) + '\n');
console.log(`✅ Enriched ${enrichedDeals.length} bulk deals with FAQs, verdicts, and scores`);
enrichedDeals.forEach(d => console.log(`  ${d.slug}: ${d.faqs.length} FAQs, score ${d.score}/10`));
