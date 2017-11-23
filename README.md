# Node-Practice

## Install

Firstly you need to have node(8+) and mongodb

### Install dependencies

```bash
npm i
```

### Seed DB

```bash
npm run db:seed
```

### Start Server

```bash
npm run dev
```

You can use PostMan for testing

## API description

default url: `http://localhost:4000`

### Get list of practices

```
/api/practices
```

### Get practice by id

```
/api/practices/:id
```

### Get list of tools for practice

```
/api/practices/:id/tools
```

### Get list of tools

```
/api/practices
```

### Get tool by id

```
/api/practices/:id
```

Notes: 
- all list APIs have `page` query param for pagination
- also you need to have header `x-api-key` or add `api-key` query param with valid apiKey
- you can find valid keys in `/src/config/validApiKeys.js`
