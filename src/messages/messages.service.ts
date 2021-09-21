import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    
    public messages= [
        {
            id:1,
            texto:'Primeira mensagem'
        },
        {
            id:2,
            texto:'Segunda mensagem'
        },
        
    ];

    findAll(){
        return this.messages;
    }
    
    findById(id: number) {
        return this.messages.find(message => message.id === id);
    }
    add(message:{id:number, texto: string}){
        this.messages.push(message);
    }
}
