import styles from './NewsCard.module.css';

const truncateChar = (text) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if(i < 250) {
            result += text[i];
        } else {
            break;
        }
    }

    return `${result}...`;
}

function NewsCard(props) {
    const { headline, abstract, source, author, buttonText, isSaved, onSave, onViewNewDetail, imageUrl } = props;

    return (
        <section className={styles.newsCard}>
            <img src={imageUrl} alt={headline} className={styles.newsImage} />

            <h3>{source}</h3>
            <h1>{headline}</h1>
            <h4>{author}</h4>
            <p>{truncateChar(abstract)}</p>

            <div className={styles.buttonContainer}>
                <button className={styles.newsPageButton} onClick={() => onViewNewDetail()}>News Page</button>
                <button 
                    className={isSaved ? styles.unsaveButton : styles.saveButton} 
                    onClick={() => onSave()}>
                    {buttonText}
                </button>
            </div>
        </section>
    );
}

export { NewsCard };
