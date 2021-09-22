import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    //instaciando e herdando tudo o que vem do messageservice onde implementarei os metodos
        constructor(private messagesService: MessagesService){}
            @Get()
            findAll(){
                return this.messagesService.findAll();
            }   
    
            @Get(':id')
            getById(@Param()params){
                return this.messagesService.findById(+params.id).catch((e)=>{
                    throw new NotFoundException(e.message) 
                });
            }

            @Post()
            create(@Body() messageDto:MessageDto ){
                return this.messagesService.create(messageDto);
            }
            @Put(':id')
            update(@Param() params, @Body() messageDto: MessageDto){
                return this.messagesService.update(+params.id, messageDto)
            }
            @Delete(':id')
            delete(@Param() params, @Body() message: Message){
                return this.messagesService.delete(+params.id, message)
            }
}
