document.addEventListener('DOMContentLoaded',async function(){const container=document.createElement("div");document.body.appendChild(container);const extensions=await browser.management.getAll();extensions.forEach(extension => {const extensionDiv=document.createElement("div");const toggleButton=document.createElement("button");toggleButton.textContent=extension.enabled?`${extension.name} - Enabled`:`${extension.name} - Disabled`;toggleButton.addEventListener("click",async()=>{try{await browser.management.setEnabled(extension.id,false);toggleButtodocument.addEventListener("DOMContentLoaded",(async function(){const e=document.createElement("div");document.body.appendChild(e);(await browser.management.getAll()).forEach((n=>{const t=document.createElement("div"),a=document.createElement("button");a.textContent=n.enabled?`${n.name} - Enabled`:`${n.name} - Disabled`,a.addEventListener("click",(async()=>{try{n.enabled?(await browser.management.setEnabled(n.id,!1),a.textContent=`${n.name} - Disabled`):(await browser.management.setEnabled(n.id,!0),a.textContent=`${n.name} - Enabled`)}catch(e){console.error(`Error toggling extension ${n.name}: ${e}`)}}));const d=document.createElement("h3");d.textContent=n.description,t.appendChild(d),t.appendChild(a),e.appendChild(t)}))}));n.textContent=`${extension.name} - Disabled`} catch {}})})})