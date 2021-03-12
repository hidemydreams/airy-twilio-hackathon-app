import React from 'react';
import ArticlesPage from "./ArticlesPage";
import './ArticleList.scss';

const articles=[
    {
        title:'CO',
        description:'CO is released into the atmosphere as volcanic and bog gases as a result of forest and steppe fires; excreted from the body by microorganisms, plants, animals and people.',
        url:"https://en.wikipedia.org/wiki/Carbon_monoxide",
    },
    {
        title:'NO',
        description:'Nitrogen dioxide is one of the most common anthropogenic emissions to the atmosphere. It is formed during the course of photochemical reactions of oxides in the atmosphere.',
        url:"https://en.wikipedia.org/wiki/Nitric_oxide"
    },
    {
        title:'	NO2',
        description:'Nitrogen dioxide is one of the most common atmospheric pollutants today, playing a significant role in the formation of smog and acid precipitation.',
        url:"https://en.wikipedia.org/wiki/Nitrogen_dioxide"
    },
    {
        title:'O3',
        description:'It is a secondary pollutant. It is not emitted into the atmospheric air from sources, but is formed as a result of photochemical reactions of precursors - volatile organic compounds, nitrogen oxides and carbon monoxide, which are emitted from cars, boiler houses and industrial plants.',
        url:'https://en.wikipedia.org/wiki/Ozone'
    },
    {
        title:'SO2',
        description:'Sulfur dioxide is a colorless, pungent, poisonous gas. Heavier than air more than twice. It dissolves well in water.',
        url:'https://en.wikipedia.org/wiki/Sulfur_dioxide'
    },
    {
        title:'PM2.5',
        description:'PM 2.5 is the smallest particles, ranging in size from 0.001 to 2.5 micrometers (μm), found in the air.',
        url:'https://www.health.ny.gov/environmental/indoors/air/pmq_a.htm'
    }
]

const ArticleList=()=>(
    <div className="ArticleList">
        {articles.map(article=>(
        <ArticlesPage title={article.title} description={article.description} url={article.url}/>
    ))}
    </div>
)
export default ArticleList;