import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly handle: string;

  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly sku: string;

  @IsNumber()
  @IsNotEmpty()
  readonly grams: number;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly comparePrice: number;

  @IsString()
  @IsNotEmpty()
  readonly barcode: string;
}
