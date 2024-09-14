import { IsEnum, IsOptional } from "class-validator";
import { OrderStatusList, OrderStatus } from "../enum/order.enum";

export class StatusDto{
    @IsOptional()
    @IsEnum (OrderStatusList, {
        message: `valid status are ${OrderStatusList}`
    })
    status: OrderStatus;
}