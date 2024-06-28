import './Article.css';

type ArticleProps = {
    id: string;
    title: string;
    content: string;
    items: string[];
    imgSrc: string;
    imgAlt: string;
};

export default function Article({ id, title, content, items, imgSrc, imgAlt }: ArticleProps) {
    return (
        <div id={id} className="article">
            <h2>{title}</h2>
            <p>{content}</p>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <img src={imgSrc} alt={imgAlt} />
        </div>
    );
}
