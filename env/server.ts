// https://env.t3.gg/docs/nextjs#create-your-schema
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const serverEnv = createEnv( {
  server: {
    XAI_API_KEY: z.string().min( 1 ).optional(),
    // AZURE_RESOURCE_NAME: z.string().min( 1 ),
    // AZURE_API_KEY: z.string().min( 1 ),
    OPENAI_API_KEY: z.string().min( 1 ).optional(),
    ANTHROPIC_API_KEY: z.string().min( 1 ).optional(),
    // CEREBRAS_API_KEY: z.string().min( 1 ),
    GROQ_API_KEY: z.string().min( 1 ).optional(),
    E2B_API_KEY: z.string().min( 1 ).optional(),
    UPSTASH_REDIS_REST_URL: z.string().min( 1 ).url().optional(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min( 1 ).optional(),
    ELEVENLABS_API_KEY: z.string().min( 1 ).optional(),
    TAVILY_API_KEY: z.string().min( 1 ).optional(),
    EXA_API_KEY: z.string().min( 1 ).optional(),
    // TMDB_API_KEY: z.string().min( 1 ),
    // YT_ENDPOINT: z.string().min( 1 ),
    FIRECRAWL_API_KEY: z.string().min( 1 ).optional(),
    // OPENWEATHER_API_KEY: z.string().min( 1 ),
    SANDBOX_TEMPLATE_ID: z.string().min( 1 ).optional(),
    GOOGLE_MAPS_API_KEY: z.string().min( 1 ).optional(),
    MAPBOX_ACCESS_TOKEN: z.string().min( 1 ).optional(),
    // TRIPADVISOR_API_KEY: z.string().min( 1 ),
    // AVIATION_STACK_API_KEY: z.string().min( 1 ),
    CRON_SECRET: z.string().min( 1 ).optional(),
    BLOB_READ_WRITE_TOKEN: z.string().min( 1 ).optional(),
  },
  experimental__runtimeEnv: process.env,
} )
