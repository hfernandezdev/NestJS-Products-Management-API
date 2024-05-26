import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'product-handle', description: 'Identificador único del producto' })
  readonly handle: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Nombre del Producto', description: 'Nombre del producto' })
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Descripción del producto', description: 'Descripción detallada del producto' })
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'SKU001', description: 'Código SKU del producto' })
  readonly sku: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 500, description: 'Peso del producto en gramos' })
  readonly grams: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 100, description: 'Cantidad en stock del producto' })
  readonly stock: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 29.99, description: 'Precio del producto' })
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 34.99, description: 'Precio de comparación del producto' })
  readonly comparePrice: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '1234567890123', description: 'Código de barras del producto' })
  readonly barcode: string;
}
