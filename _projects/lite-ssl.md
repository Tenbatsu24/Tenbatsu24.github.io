---
layout: project
name: "LiteSSL"
description: "A unified, benchmarked codebase for training and comparing well-known self-supervised vision methods (DINO, iBOT, LeJEPA) under identical conditions."
date: 2026-06-16

categories:
  - project

featured: true

tags:
  - machine-learning
  - self-supervised-learning
  - computer-vision
  - open-source

thumbnail: "lite-ssl.png"

links:
  - label: "GitHub"
    url: "https://github.com/Open-Knowledge-AI/lite_ssl"
  - label: "HuggingFace Collection"
    url: "https://huggingface.co/collections/OK-AI/imagenet-1k-self-supervised-vit-baselines"
  - label: "HuggingFace Space (demo)"
    url: "https://huggingface.co/spaces/OK-AI/ViT-Patch-PCA-Visualisation"
---

## Overview

Papers introducing new self-supervised learning (SSL) methods are rarely trained under matched conditions, which makes it hard to tell whether reported gains come from the method itself or from differences in architecture, data, schedules, or compute. **LiteSSL** addresses this by providing a single, lightweight codebase for training well-known SSL methods — currently **DINO**, **iBOT**, and **LeJEPA** — with identical backbones, data, hardware, and training recipes, so that comparisons across methods and training durations are directly meaningful.

The repository trains Vision Transformers (ViT-S/16 and ViT-B/16, DINOv2-style, no register tokens) on ImageNet-1K at 100 and 300 epochs per method, and releases all resulting checkpoints publicly on HuggingFace, along with an interactive Space for visually comparing what each method's patch-token representations actually learn via PCA projections.

Built with benchmarking and reproducibility as first-class concerns, rather than treating it as an afterthought: every model shares the same training strategy and infrastructure, exact configs are versioned in the repo, and evaluation numbers are logged and reported directly alongside the checkpoints.
