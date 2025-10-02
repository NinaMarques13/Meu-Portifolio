# DSM-0001 — adição do icone idiomas

**Tipo de mudança:** Padrão
**Repositório:** https://github.com/NinaMarques13/Meu-Portifolio.git
**Branch:** add-language-label 
**Responsável:** Nicolas Marques — **Data:** 02/10/2025

## 1. Contexto e problema
Na criação do portifólio faltou incluir o ícone de idiomas para incluir o inglês como segunda lingua.

## 2. Hipótese e valor esperado (falsificável)
Se clicarmos na aba "sobre", então esperamos o icone "Idiomas" com a descriçaõ do inglês.

## 3. Escopo
Arquivos afetados: `About.tsx`. Criação de um card "Idiomas".

## 4. Risco e mitigação
- Risco: o icone não aparecer e quebrar a esilização da página.
- Mitigações: atualizar o arquivo `About.tsx`.

## 5. Plano de rollout e rollback
- **Rollout:** (i)atualizar o arquivo; (ii) abrir PR; (iii) observar se o item foi adicionado no site.
- **Rollback:** se o icone e a descrião não aparecerem, atualizar o arquivo  novemente e abrir outro PR.

## 6. Métricas, SLIs e critérios de sucesso
- **Métricas:** PR e Deploy feito.
- **Critérios de sucesso:** icone aparecendo sem quebrar o layout.

## 7. Aprovação proporcional ao risco
Revisor: Nicolas Marques. Aprovação via PR.

## 8. Rastreabilidade
- **Issue/CR:** <link>  
- **Commits:** #3  
- **PR:** [<link>](https://github.com/NinaMarques13/Meu-Portifolio/commit/1e250e565d0d937d021624d72ab3e885064efd59) — **Release/Tag:** 0.0.1

## 9. Evidências (anexos)
- Prints do site mobile e web.

## 10. Pós-mudança (review breve)
o icone funcionou, futuramente adicionar o arquivo com o certificado.

---

### Checklist de risco (marcar)
- [x] Mudança pequena e isolada  
- [x] Plano de rollback testado  
- [x] Critérios de sucesso objetivos definidos  
- [x] Observabilidade/evidência preparada  
- [x] Aprovação de par registrada no PR