type countdownValueType = number | string;

interface CountdownProps {
    value?: countdownValueType;
    interval?: number;
    onFinish?: () => void;
    onChange?: (value?: countdownValueType) => void;
}

function getTime(value?: countdownValueType) {
    return new Date(value as any).getTime();
}

export default class CountDown {
    value?: countdownValueType
    interval: number;
    onFinish?: () => void;
    onChange?: (value?: countdownValueType) => void;

    private _timer?: NodeJS.Timeout;

    constructor(props: CountdownProps) {
        this.value = props.value;
        this.interval = props.interval || 1000;
        this.onFinish = props.onFinish;
        this.onChange = props.onChange;
    }

    _countdown() {
        this._timer = setTimeout(() => {
            const timestamp = getTime(this.value);
            const duration = timestamp - Date.now();
            this.onChange && this.onChange(duration > 0 ? duration : 0);
            if (timestamp > Date.now()) {
                this._countdown();
            } else {
                this.onFinish && this.onFinish();
                this.stop();
            }
        }, this.interval);
    }

    start() {
        if(this._timer) return;
        const timestamp = getTime(this.value);
        if (timestamp <= Date.now()) {
            this.onChange && this.onChange(0);
            this.onFinish && this.onFinish();
            return;
        }
        this._countdown();
    }

    stop() {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
    }

}