import './MyBlock.css'
import { articles } from '../lib/Data';
import Article from '../Components/Article';


export default function MyBlock() {
    return (
        <>
            <header>
                <div className="container">
                    <div id="branding">
                        <h1>Rick and Morty Blog</h1>
                    </div>
                    <nav>
                        <ul>
                            {articles.map(article => (
                                <li key={article.id}>
                                    <a href={`#${article.id}`}>{article.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="container">
                {articles.map((article, index) => (
                    <Article
                        key={index}
                        id={article.id}
                        title={article.title}
                        content={article.content}
                        items={article.items}
                        imgSrc={article.imgSrc}
                        imgAlt={article.imgAlt}
                    />
                ))}
            </div>
        </>
    );
}
