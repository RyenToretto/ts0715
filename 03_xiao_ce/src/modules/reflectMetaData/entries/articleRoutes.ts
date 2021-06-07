import 'reflect-metadata'
import { Controller, createMappingDecorator } from './decorator'

const Get = createMappingDecorator('GET');
const Post = createMappingDecorator('POST');

@Controller('/article')
export class Article {
    @Get('/content')
    someGetMethod() {
        return 'hello world';
    }

    @Post('/comment')
    somePostMethod() {}
}
