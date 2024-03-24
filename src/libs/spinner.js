
export const spinnerBlock = () => {
    const container = document.createElement('div')
    container.className = 'container'

    for (let j = 1; j <= 4; j++){
        const circleBlock = document.createElement('div')
        circleBlock.className = 'circle'

        for (let i = 1; i <= 20; i++){
            const spanBlock = document.createElement('span')
            spanBlock.style = `--i: ${i}`
            console.log(i, ' = ', spanBlock)
            circleBlock.append(spanBlock)
        }
        container.append(circleBlock)
    }
    return container
}