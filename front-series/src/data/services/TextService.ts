export const TextService = {
    limitText(text: string, MaximumSize: number): string {
        if(text.length < MaximumSize){
            return text;
        }
        return text.slice(0, MaximumSize) + '...';
    }
}