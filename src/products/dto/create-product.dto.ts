import { IsOptional, IsString, MinLength, IsArray, IsIn, IsInt, IsNumber, IsPositive } from "class-validator";

export class CreateProductDto {

    @IsString()
    @MinLength(3)
    title: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString({ each: true })
    @IsArray()
    sizes: string[];

    @IsIn(['men', 'woman', 'kid', 'unisex'])
    gender: string;
}
