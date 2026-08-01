---
layout: project
name: "Data-Agnostic Augmentations for Unknown Variations"
description: "Evaluating MixUp and Auxiliary Fourier Augmentation for out-of-distribution generalisation in cardiac and prostate MRI segmentation."
date: 2025-05-15

categories:
  - project
  - publication

tags:
  - machine-learning
  - medical-imaging
  - data-augmentation
  - segmentation

thumbnail: "data-agnostic-augmentations.jpg"

citation: >
  "Data-Agnostic Augmentations for Unknown Variations: Out-of-Distribution Generalisation in MRI Segmentation." <br>
  <u>Vaish, P.</u>, Meister, F., Heimann, T., Brune, C., Wolterink, J. M. <br>
  Medical Imaging with Deep Learning (MIDL), 2025.

links:
  - label: "OpenReview"
    url: "https://openreview.net/forum?id=erHgJGtptZ"
  - label: "arXiv"
    url: "https://arxiv.org/abs/2505.10223"
  - label: "GitHub"
    url: "https://github.com/miagrouput/augmentations-for-the-unknown"
---

## Overview

Medical image segmentation models are usually trained on carefully curated datasets, so they often underperform once deployed on messier, real-world clinical data. Standard, visually-consistent augmentation strategies don't provide enough robustness to handle this kind of distribution shift.

This work systematically studies two augmentation strategies that don't target any single, specific type of shift: **MixUp** and **Auxiliary Fourier Augmentation (AFA)**.

## Method

MixUp and AFA are integrated into standard nnU-Net training pipelines for cardiac cine MRI and prostate MRI segmentation, and compared against conventional augmentation baselines across a wide range of imaging variations.

## Results

Both methods meaningfully improve out-of-distribution generalisation and robustness to imaging variations. They also produce learned feature representations that are more separable and compact, and integrate easily into existing nnU-Net pipelines — making them a practical way to improve reliability in real-world clinical deployment.
