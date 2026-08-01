---
layout: project
name: "SegReg: Latent Space Regularization for Improved Medical Image Segmentation"
description: "A latent-space regularisation framework for U-Net models that improves domain generalisation and continual learning in medical segmentation."
date: 2026-02-26

categories:
  - project
  - publication

tags:
  - machine-learning
  - medical-imaging
  - segmentation
  - continual-learning

rank: 3

thumbnail: "segreg.jpg"

citation: >
  "SegReg: Latent Space Regularization for Improved Medical Image Segmentation." <br>
  <u>Vaish, P.</u>, Ranem, A., Meister, F., Heimann, T., Brune, C., Wolterink, J. M. <br>
  Preprint (in-review), 2026.

links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2602.23509"
---

## Overview

Medical image segmentation models are typically trained with voxel-wise losses (e.g. Dice, cross-entropy) that only constrain the output space, leaving the model's internal latent representations unconstrained. This can limit how well the model generalises to new domains or adapts over a sequence of tasks.

## Method

The paper proposes **SegReg**, a latent-space regularisation framework that acts on the feature maps of U-Net models to encourage more structured embeddings, while staying fully compatible with standard segmentation losses. It's integrated directly into the nnU-Net framework.

## Results

Evaluated on prostate, cardiac, and hippocampus segmentation, SegReg consistently improves domain generalisation. It also improves continual learning by reducing task drift and enhancing forward transfer across sequential tasks — without requiring extra memory or additional parameters.
