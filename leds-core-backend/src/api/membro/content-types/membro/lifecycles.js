module.exports = {
  async beforeUpdate(event) {
    const { params, data } = event;

    const memberId = params.where.id;

    // Buscar membro atual
    const existingMember = await strapi.entityService.findOne('api::membro.membro', memberId, {
      populate: ['bolsas'],
    });

    // Verificar se houve alteração nas bolsas
    if (
      data.bolsas &&
      existingMember.bolsas?.[0]?.id !== data.bolsas?.[0]
    ) {
      const oldBolsa = existingMember.bolsas?.[0];

      if (oldBolsa) {
        await strapi.entityService.create('api::historico-bolsa.historico-bolsa', {
          data: {
            inicioBolsa: new Date().toISOString(), // ou uma lógica específica
            fimBolsa: new Date().toISOString(),
            bolsa: oldBolsa.id,
            membro: memberId,
          },
        });

        strapi.log.info(`[Historico] Bolsa ${oldBolsa.id} salva no histórico para membro ${memberId}`);
      }
    }
  },
};
