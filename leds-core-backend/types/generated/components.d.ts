import type { Schema, Struct } from '@strapi/strapi';

export interface FinanceiroDadosMaterialPermanente
  extends Struct.ComponentSchema {
  collectionName: 'components_financeiro_dados_material_permanentes';
  info: {
    description: '';
    displayName: 'dados-material-permanente';
  };
  attributes: {
    item_aquisicao: Schema.Attribute.Text;
    localizacao: Schema.Attribute.String;
    material_importado: Schema.Attribute.Boolean;
    quantidade: Schema.Attribute.Integer;
  };
}

export interface FinanceiroDadosPassagem extends Struct.ComponentSchema {
  collectionName: 'components_financeiro_dados_passagems';
  info: {
    displayName: 'dados-passagem';
  };
  attributes: {
    data_emissao: Schema.Attribute.Date;
    data_hora_chegada: Schema.Attribute.DateTime;
    data_hora_saida: Schema.Attribute.DateTime;
    localizador: Schema.Attribute.String;
    passageiro: Schema.Attribute.String;
  };
}

export interface FinanceiroDadosPessoaJuridica extends Struct.ComponentSchema {
  collectionName: 'components_financeiro_dados_pessoa_juridicas';
  info: {
    displayName: 'dados-pessoa-juridica';
  };
  attributes: {
    cnpj: Schema.Attribute.String;
    descricao_servico: Schema.Attribute.Text;
    nome_credor: Schema.Attribute.String;
    numero_documento: Schema.Attribute.String;
    tipo_documento: Schema.Attribute.Enumeration<
      ['Nota Fiscal', 'Fatura', 'Duplicata', 'Proforma Invoice']
    >;
  };
}

export interface FinanceiroHospedagemAlimentacao
  extends Struct.ComponentSchema {
  collectionName: 'components_financeiro_hospedagem_alimentacaos';
  info: {
    displayName: 'HospedagemAlimentacao';
  };
  attributes: {
    cnpj: Schema.Attribute.String;
    descricao_servico: Schema.Attribute.String;
    nome_credor: Schema.Attribute.String;
    numero_documento: Schema.Attribute.String;
    tipo_documento: Schema.Attribute.Enumeration<
      ['Nota Fiscal', 'Fatura', 'Duplicata', 'Proforma Invoice']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'financeiro.dados-material-permanente': FinanceiroDadosMaterialPermanente;
      'financeiro.dados-passagem': FinanceiroDadosPassagem;
      'financeiro.dados-pessoa-juridica': FinanceiroDadosPessoaJuridica;
      'financeiro.hospedagem-alimentacao': FinanceiroHospedagemAlimentacao;
    }
  }
}
