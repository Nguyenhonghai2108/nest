import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './create-post.dto';

@Controller('posts')
export class PostController {
    constructor(private postService: PostService) { }

    @Get()
    async getPosts() {
        const posts = await this.postService.getPosts();
        return posts;
    }

    @Get(':postId')
    async getCourse(@Param('postId') postId) {
        const post = await this.postService.getPost(postId);
        return post;
    }

    @Post()
    async addPost(@Body() CreatePostDto: CreatePostDto) {
        const post = await this.postService.addPost(CreatePostDto);
        return post;
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string) {
        const post = await this.postService.deletePost(id);
        return post;
    }
}