export class Recipe {
    constructor(
        public id: string,
        public name: string,
        public imageUrl: string,
        public rating: number,
        public time: number,
        public course: string[],
        public ingredients: string[],
        public flavors: number[]
    ) {}
}
