import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Vendedor} from './vendedor.model';

@model({
  settings: {
    foreignKeys: {
      fk_vehiculo_id_proveedor: {
        name: 'fk_vehiculo_id_proveedor',
        entity: 'Proveedor',
        entityKey: 'id',
        foreignKey: 'id_proveedor',
      },
      fk_vehiculo_id_marca: {
        name: 'fk_vehiculo_id_marca',
        entity: 'Marca',
        entityKey: 'id',
        foreignKey: 'id_marca',
      }
    },
  },
})
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @belongsTo(() => Vendedor, {name: 'creado_por'})
  id_vendedor: number;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
