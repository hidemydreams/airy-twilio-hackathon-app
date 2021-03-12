import React from 'react';
import ArticlesPage from "./ArticlesPage";
import './ArticleList.scss';

const articles=[
    {
        title:'co',
        description:'Air quality is linked to human activities, earth’s climate and ecosystems globally. Many of the drivers of air pollution (i.e. combustion of fossil fuels) are also sources of CO2.'
    },
    {
        title:'co',
        description:'Air quality is linked to human activities, earth’s climate and ecosystems globally. Many of the drivers of air pollution (i.e. combustion of fossil fuels) are also sources of CO2.'
    },
    {
        title:'co',
        description:'Air quality is linked to human activities, earth’s climate and ecosystems globally. Many of the drivers of air pollution (i.e. combustion of fossil fuels) are also sources of CO2.'
    },
    {
        title:'co',
        description:'Air quality is linked to human activities, earth’s climate and ecosystems globally. Many of the drivers of air pollution (i.e. combustion of fossil fuels) are also sources of CO2.'
    },
    {
        title:'co',
        description:'Air quality is linked to human activities, earth’s climate and ecosystems globally. Many of the drivers of air pollution (i.e. combustion of fossil fuels) are also sources of CO2.'
    },
    {
        title:'co',
        description:'Air quality is linked to human activities, earth’s climate and ecosystems globally. Many of the drivers of air pollution (i.e. combustion of fossil fuels) are also sources of CO2.'
    }
]

const ArticleList=()=>(
    <div className="ArticleList">
        {articles.map(article=>(
        <ArticlesPage title={article.title} description={article.description}/>
    ))}
    </div>
)
export default ArticleList;