interface linkData {
    title: string,
    url: string,
    image?: string,
    preview: string,
}

function render(item: linkData) {
    return <article>
        <a href={item.url} target="_blank" rel="noopener">
            <div class="article-details">
                <h2 class="article-title" dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                <footer class="article-time" dangerouslySetInnerHTML={{ __html: item.preview }}></footer>
            </div>
            {item.image &&
                <div class="article-image">
                    <img src={item.image} loading="lazy" />
                </div>
            }
        </a>
    </article>;
}