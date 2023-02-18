#!/bin/bash
cd frontend
npm run dev &
cd ../backend
poetry run start