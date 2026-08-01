---
layout: project
name: "Fourier-basis Functions to Bridge Augmentation Gap"
description: "Rethinking frequency-domain augmentation to close the robustness gap left by standard visual augmentations."
date: 2024-06-17

categories:
  - project
  - publication

featured: true

tags:
  - machine-learning
  - computer-vision
  - data-augmentation
  - robustness

thumbnail: "fourier-basis-augmentation.jpg"

citation: >
  "Fourier-basis Functions to Bridge Augmentation Gap: Rethinking Frequency Augmentation in Image Classification." <br>
  <u>Vaish, P.</u>, Wang, S., Strisciuglio, N. <br>
  Computer Vision and Pattern Recognition (CVPR), 2024.

links:
  - label: "CVPR Open Access"
    url: "https://openaccess.thecvf.com/content/CVPR2024/html/Vaish_Fourier-basis_Functions_to_Bridge_Augmentation_Gap_Rethinking_Frequency_Augmentation_in_CVPR_2024_paper.html"
  - label: "arXiv"
    url: "https://arxiv.org/abs/2403.01944"
  - label: "GitHub"
    url: "https://github.com/nis-research/afa-augment"
---

## Overview

Vision models tend to lose accuracy once deployed in the real world, because inputs shift away from the distribution seen during training. Standard visual data augmentation (crops, flips, color jitter, and similar) helps, but doesn't fully close this gap.

This work introduces **Auxiliary Fourier-basis Augmentation (AFA)**, a complementary augmentation strategy that operates in the frequency domain instead of pixel space, targeting the specific robustness gap that visual augmentations leave open.

## Method

AFA perturbs images with additive noise built from Fourier-basis functions, applied as an auxiliary objective alongside standard training. It is lightweight, model-agnostic, and designed to slot into existing augmentation pipelines without extra parameters or major changes to the training setup.

## Results

Across CIFAR-10/100, Tiny-ImageNet, and ImageNet-scale benchmarks, AFA improves robustness to common corruptions, out-of-distribution generalization, and stability under increasing input perturbations — with little to no cost to standard (clean) accuracy. It also combines well with existing augmentation techniques for further gains.
