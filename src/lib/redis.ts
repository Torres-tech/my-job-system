import Redis from "ioredis";

type GlobalWithRedis = typeof globalThis & {
  _redis: { pub?: Redis; sub?: Redis };
};

const g = global as GlobalWithRedis;
g._redis ||= {};

export function getRedisPublisher(): Redis | null {
  const url = process.env.REDIS_URL;
  if (!url) return null;
  if (!g._redis.pub) g._redis.pub = new Redis(url);
  return g._redis.pub;
}

export function getRedisSubscriber(): Redis | null {
  const url = process.env.REDIS_URL;
  if (!url) return null;
  if (!g._redis.sub) g._redis.sub = new Redis(url);
  return g._redis.sub;
}


