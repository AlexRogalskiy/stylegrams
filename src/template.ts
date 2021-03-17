export const getTemplate = (template: any): string => {
    return `
    <svg width="${parseInt(template.width)}px"
         height="${parseInt(template.height)}px"
         fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
                ${template.css}
            </style>
            ${template.structure}
        </div>
    </foreignObject>
    </svg>`
}
