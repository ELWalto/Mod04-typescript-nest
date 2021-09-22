import { MessageDto } from './MessageDto';
import { Injectable } from '@nestjs/common';
import { Message } from './Message';

@Injectable()
export class MessagesService {
     
    
    public messages: Message[] = [
        {
            id:1,
            texto:'Primeira mensagem'
        },
        {
            id:2,
            texto:'Segunda mensagem'
        },
        {
            id:3,
            texto:'Terceira mensagem'
        },
        {
            id:4,
            texto:'Quarta mensagem'
        },
        {
            id:5,
            texto:'Quinta mensagem'
            
        },
        
    ];

    findAll(){
        return this.messages.filter(Boolean);
    }
    
    async findById(id: number) {
        const message = this.messages.find(message => message.id === id);
        if(!message){
            throw Error (`Mensagem com id ${id} não encontrado`)
        }
        return message;
        
    }
    create(MessageDto:MessageDto){
        const id = this.messages.length + 1;
        const message: Message ={
            id,
            ...MessageDto,
        }
        this.messages.push(message);
        return message;
    }
    update(id:number, messageDto: MessageDto) {
        const index = this.messages.findIndex(a => a.id === id);

        const message : Message = {
            id,
            ...messageDto,
        }

        this.messages[index] = message;

        return message;
    }

    delete(id: number, message: Message) {
        const index  = this.messages.findIndex(msg => msg.id === id);

        delete this.messages[index];
        
        return `${index} deletado com sucesso`;
    }

}
