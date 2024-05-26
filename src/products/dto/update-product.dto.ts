import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'product-handle', description: 'Identificador único del producto' })
  readonly handle?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Nuevo nombre del Producto', description: 'Nuevo nombre del producto' })
  readonly title?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Nueva descripción del producto', description: 'Nueva descripción detallada del producto' })
  readonly description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'SKU002', description: 'Nuevo código SKU del producto' })
  readonly sku?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 600, description: 'Nuevo peso del producto en gramos' })
  readonly grams?: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 150, description: 'Nueva cantidad en stock del producto' })
  readonly stock?: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 39.99, description: 'Nuevo precio del producto' })
  readonly price?: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 44.99, description: 'Nuevo precio de comparación del producto' })
  readonly comparePrice?: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '1234567890124', description: 'Nuevo código de barras del producto' })
  readonly barcode?: string;
}
