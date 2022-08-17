export const refreshScale = () => {
    const baseWidth = document.documentElement.clientWidth;
    const baseHeight = document.documentElement.clientHeight;
    const appStyle: any = document.getElementById('root')?.style;
    if(!appStyle) {
        return;
    }
    const realRatio = baseWidth / baseHeight;
    const designRatio = 16 / 9;
    let scaleRate = baseWidth / 1920;
    if (realRatio > designRatio) {
        scaleRate = baseHeight / 1080;
    }
    appStyle.transformOrigin = 'left top';
    appStyle.transform = `scale(${scaleRate}) translateX(-50%)`;
    appStyle.width = `${baseWidth / scaleRate}px`;

    console.log(appStyle.width, scaleRate);
}