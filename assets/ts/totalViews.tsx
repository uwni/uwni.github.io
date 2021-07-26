import * as params from '@params';
import { fetchViews } from "./tool";

async function render(namespace: string, key: string) {
    const powerby = document.getElementsByClassName("powerby")[0]
   
    const views = await fetchViews(namespace, key);
    const counter =
        <span>
            Total <span>{views.value}</span> Views
            <br />
        </span>;
    
    powerby.prepend(counter);
        
} 

render(params.namespace, params.key);