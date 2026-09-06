# PharmaSys – correctifs runtime

La migration `supabase/migrations/20260906000100_fix_pharmasys_runtime.sql` corrige les IDs bigint, crée le bucket `logos`, et ajoute la RPC transactionnelle `valider_vente`.

Appliquer les migrations Supabase avant de publier le frontend. La clé utilisée dans Configuration initiale doit être la clé anon/publishable du même projet Supabase que l’URL.
