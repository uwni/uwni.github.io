import * as params from '@params';
import { fetchViews } from './tool';
    
async function render(icon: string, namespace: string, key: string) {
    const footer = document.getElementsByClassName("article-footer")[0];
    if (!footer) {
        console.log("no available footer was found!");
        return;
    }

    const views = await fetchViews(namespace, key);
    const ico = new DOMParser().parseFromString(icon, "image/svg+xml").documentElement;
    const sec =
        <section class="article-copyright article-views">
            {ico}
            <span class="pageViews">{views.value}</span>
            <span>views</span>
        </section>

    footer.appendChild(sec);
}

render(params.icon, params.namespace, params.key);