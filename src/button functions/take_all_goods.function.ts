import { IBotContext } from "../context/context.interface";

 export const take_all_goods = (ctx: IBotContext) => {
    console.log("команда Получить список товаров")
    ctx.reply("команда Получить список товаров");
}