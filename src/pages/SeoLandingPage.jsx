import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

import Header from "../components/Header";
import FeaturesSection from "../components/FeaturesSection";
import ControlSection from "../components/ControlSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FinalCTASection from "../components/FinalCTASection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";

import SeoHead from "../components/SeoHead";
import SeoIntroSection from "../components/seo/SeoIntroSection";
import SeoTextSection from "../components/seo/SeoTextSection";
import ProblemSection from "../components/seo/ProblemSection";
import AppShowcaseSection from "../components/seo/AppShowcaseSection";

const PAGE_MAP = {
    finance: {
        title: "Controle financeiro pessoal | YenomPlanner",
        description:
            "Organize gastos, cartões e finanças em um só lugar.",
        canonical: "https://www.yenomplanner.com/controle-financeiro-pessoal",

        heroTitle: "Controle financeiro pessoal sem planilhas complicadas",
        heroSubtitle:
            "Veja tudo que entra, tudo que sai e tenha clareza total da sua vida financeira.",

        problems: [
            "Você não sabe exatamente para onde seu dinheiro está indo",
            "Mistura contas, cartões e gastos no dia a dia",
            "Já tentou planilha e não conseguiu manter",
        ],

        showcaseTitle: "Tudo organizado em um único painel",
        showcaseSubtitle:
            "Visualize gastos, cartões e categorias de forma simples e clara.",
        image: "/images/lancamentos.png",

        sections: [
            {
                title: "Veja sua vida financeira com clareza",
                text:
                    "Com uma visão consolidada, você entende rapidamente sua situação financeira.",
            },
            {
                title: "Controle gastos sem esforço",
                text:
                    "Acompanhe tudo em poucos cliques, sem complicação.",
            },
        ],
    },

    card: {
        title: "Controle de cartão de crédito | YenomPlanner",
        description:
            "Controle faturas e parcelas sem confusão.",
        canonical: "https://www.yenomplanner.com/controle-cartao-de-credito",

        heroTitle: "Nunca mais se perca na fatura do cartão",
        heroSubtitle:
            "Veja parcelas, compras e valores futuros com clareza.",

        problems: [
            "Fatura vem maior do que você esperava",
            "Parcelas espalhadas e difíceis de acompanhar",
            "Não sabe quanto já comprometeu do limite",
        ],

        showcaseTitle: "Controle total da sua fatura",
        showcaseSubtitle:
            "Entenda exatamente o que está sendo cobrado.",
        image: "images/app-card-preview.png",

        sections: [
            {
                title: "Acompanhe cada compra",
                text:
                    "Tenha controle total das suas transações.",
            },
            {
                title: "Preveja sua próxima fatura",
                text:
                    "Evite surpresas e planeje melhor seus gastos.",
            },
        ],
    },

    expenses: {
        title: "Controle de gastos | YenomPlanner",
        description:
            "Entenda e organize seus gastos facilmente.",
        canonical: "https://www.yenomplanner.com/controle-de-gastos",

        heroTitle: "Saiba exatamente para onde seu dinheiro vai",
        heroSubtitle:
            "Visualize seus gastos e mude seus hábitos.",

        problems: [
            "Gasta e não sabe onde foi o dinheiro",
            "Dificuldade em economizar",
            "Falta de controle mensal",
        ],

        showcaseTitle: "Visualize seus gastos por categoria",
        showcaseSubtitle:
            "Tenha clareza sobre seus hábitos financeiros.",
        image: "/images/app-cost-cat.png",

        sections: [
            {
                title: "Organize seus gastos",
                text:
                    "Classifique e entenda seus hábitos.",
            },
            {
                title: "Tome decisões melhores",
                text:
                    "Com informação clara, você melhora sua rotina financeira.",
            },
        ],
    },

    planning: {
        title: "Planejamento financeiro | YenomPlanner",
        description:
            "Planeje sua vida financeira com clareza.",
        canonical: "https://www.yenomplanner.com/planejamento-financeiro",

        heroTitle: "Planeje seu dinheiro com mais segurança",
        heroSubtitle:
            "Tenha visão clara dos próximos meses.",

        problems: [
            "Não sabe quanto vai sobrar no mês",
            "Dificuldade em planejar despesas futuras",
            "Vive no improviso financeiro",
        ],

        showcaseTitle: "Tenha previsibilidade financeira",
        showcaseSubtitle:
            "Planeje com base em dados reais.",
        image: "images/app-preview.png",

        sections: [
            {
                title: "Planeje com antecedência",
                text:
                    "Antecipe gastos e evite surpresas.",
            },
            {
                title: "Tenha mais segurança",
                text:
                    "Controle financeiro traz tranquilidade.",
            },
        ],
    },
};

export default function SeoLandingPage({ pageKey }) {
    const c = PAGE_MAP[pageKey];

    return (
        <Box>
            <SeoHead
                title={c.title}
                description={c.description}
                canonical={c.canonical}
            />

            <Header />

            <SeoIntroSection title={c.heroTitle} subtitle={c.heroSubtitle} />

            <ProblemSection
                title="Se isso acontece com você, você não está sozinho"
                bullets={c.problems}
            />

            <AppShowcaseSection
                title={c.showcaseTitle}
                subtitle={c.showcaseSubtitle}
                image={c.image}
            />

            <Grid container spacing={4} sx={{ mt: 2, justifyContent: 'center' }}>
                {c.sections.map((s, i) => (
                    <Grid item xs={12} md={6} key={i}>
                        <SeoTextSection title={s.title} text={s.text} />
                    </Grid>
                ))}
            </Grid>

            <FeaturesSection />
            <ControlSection />
            <HowItWorksSection />
            <FinalCTASection />
            <Footer />
            <FloatingWhatsApp />
        </Box>
    );
}